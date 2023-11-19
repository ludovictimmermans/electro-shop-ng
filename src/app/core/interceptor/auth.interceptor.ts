import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {AuthService} from "../../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private $authServ: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let headers = new HttpHeaders();
    if( this.$authServ.token ){
      headers = headers.set('Authorization', `Bearer ${this.$authServ.token}`)
      request = request.clone({
        headers: headers
      })
    }

    return next.handle(request).pipe(
      tap({error:(err) => console.error('from interceptor', err)})
    );
  }
}
