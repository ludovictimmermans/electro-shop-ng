import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {AuthService} from "./services/auth.service";
import {AuthDTO} from "./shared/models/auth.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'electro-shop-ng';
  connectedUser$: Observable<AuthDTO | null>;
  constructor(private readonly $authServ:AuthService) {
    this.connectedUser$ = this.$authServ.connectedUser$;
  }

  get isConnected(){
    return this.$authServ.isConnected;
  }

  get role(){
    return this.$authServ.role;
  }
}
