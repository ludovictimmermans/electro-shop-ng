import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthService} from "../../services/auth.service";
import {Observable, tap} from "rxjs";
import {CartService} from "../../services/cart.service";

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
  profileLinks: MenuItem[] = [
    {
      label: 'Gerer mon compte',
      routerLink: 'customer/update/'
    },
    {
      label: 'Changer de mot de passe',
      routerLink: 'customer/pwd/'
    },
    {
      label: 'Mes commandes',
      routerLink: 'customer/order/'
    }


  ];
  username$:Observable<String | null>;
  cartSize:string;
  overlayVisible: boolean=false;

  constructor(private readonly $authServ:AuthService,private readonly $cartService:CartService) {
    this.username$ = this.$authServ.username$;
    this.cartSize=($cartService.cartSize).toString();
  }

  get isConnected(){
    return this.$authServ.isConnected;
  }

  get role(){
    return this.$authServ.role;
  }

  disconnect(){
    this.$authServ.disconnect();
  }

  toggle(){
    this.overlayVisible=!this.overlayVisible;
  }
}
