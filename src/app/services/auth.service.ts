import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthDTO} from "../shared/models/auth.model";
import {Router} from "@angular/router";

const AUTH_KEY = 'connectedUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _connectedUser$ = new BehaviorSubject<AuthDTO | null>( this.connectedUser );

  constructor(private client: HttpClient,private router:Router) {}

  connect(username: string, password: string){
    return this.client.post<AuthDTO>('http://localhost:8080/auth/login', {username, password}).pipe(
      tap({
        next: (auth) => this.connectedUser = auth,
        error: (err) => { console.error(err) }
      })
    );
  }

  disconnect(){
    if( this.isConnected ) {
      this.connectedUser = null;
      this.router.navigateByUrl("");
    }
  }

  get isConnected(): boolean {
    return !!this.connectedUser;
  }

  get connectedUser(): AuthDTO | null {
    const authString = localStorage.getItem(AUTH_KEY);
    if( authString )
      return JSON.parse(authString) as AuthDTO;
    else
      return null;
  }

  private set connectedUser(user: AuthDTO | null){
    if( user )
      localStorage.setItem(AUTH_KEY, JSON.stringify(user));

    else
      localStorage.removeItem(AUTH_KEY);

    this._connectedUser$.next( this.connectedUser );
  }

  get connectedUser$(): Observable<AuthDTO | null>{
    return this._connectedUser$.asObservable()
  }

  get username$(): Observable<string | null> {
    return this.connectedUser$.pipe(
      map( auth => auth ? auth.username : null )
    )
  }

  get connected$(): Observable<boolean>{
    return this.connectedUser$.pipe(
      map( auth => !!auth )
    )
  }

  get token(): string | null {
    return this.connectedUser ? this.connectedUser.token : null;
  }

  get role(): string | null {
    return this.connectedUser ? this.connectedUser.roles[0] : null;
  }
}
