import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthService} from "../../services/auth.service";
import {Observable} from "rxjs";
import {CartService} from "../../services/cart.service";
import {Category} from "../../shared/models/category.model";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  items: MenuItem[] = [
    ];
  adminItems: MenuItem[] = [
    {
      label: 'Marque',
      routerLink: 'manager/brand/list'
    },
    {
      label: 'Catégories',
      routerLink: 'manager/category/list'
    },
    {
      label: 'Produits',
      routerLink: 'manager/product/list'
    }
  ];
  stat:MenuItem[] = [{
    label: 'Voir',
    routerLink: 'manager/statistic'
  }

  ];

  orderItem:MenuItem[] = [{
    label: 'Préparation',
    routerLink: 'manager/order/preparation'
  },
    {
      label: 'Livraison',
      routerLink: 'manager/order/delivery'
    }

  ];
  categories$:Observable<Category[]>;
  username$:Observable<String | null>;
  cartSize:string;
  overlayVisible: boolean=false;

  constructor(private readonly $authServ:AuthService,private readonly $cartService:CartService,private readonly $cartegoryserv:CategoryService) {
    this.username$ = this.$authServ.username$;
    this.categories$=this.$cartegoryserv.getAll();
    this.categories$.subscribe(list => {
      list.forEach( c=> this.items.push(
        {
          label: c.name,
          routerLink: 'shopping/'+c.name.replace(" ","-")
        }
      ))
    } )
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
