import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthService} from "../../services/auth.service";
import {Observable, tap} from "rxjs";

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
      label: 'Brand',
      items: [
        {
          label:'list',
          routerLink:'/manager/brand/list'
        }
      ]
    },
    {
      label: 'Category',
      items: [
        {
          label:'list',
          routerLink:'/manager/category/list'
        }
      ]
    },
    {
      label: 'Product',
      items: [
        {
          label:'list',
          routerLink:'/manager/product/list'
        }
      ]
    }


  ];
  username$:Observable<String | null>

  constructor(private readonly $authServ:AuthService) {
    this.username$ = this.$authServ.username$;
  }

  get isConnected(){
    return this.$authServ.isConnected;
  }

  disconnect(){
    this.$authServ.disconnect();
  }
}
