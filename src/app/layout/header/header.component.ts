import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  links: MenuItem[] = [
    {
      label: 'home',
      routerLink: 'home'
    },
    {
      label: 'login',
      routerLink: 'login'
    }
  ]
}
