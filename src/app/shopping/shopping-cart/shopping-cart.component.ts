import { Component } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../shared/models/cart.model";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  cart: CartItem[];
  delivery:Date=new Date();

  constructor(
    private readonly $cartServ: CartService,
    private readonly $authServ: AuthService,
    private router:Router
  ) {
    this.cart = $cartServ.cart;
    this.delivery.setDate(this.delivery.getDate()+3);
  }

  get total() {
    return this.$cartServ.total;
  }

  get TVA(){
    return (this.total/100)*21
  }

  removeAll(item: CartItem){
    this.$cartServ.removeFromCart(item);
  }

  removeOne(item: CartItem){
    this.$cartServ.removeFromCart(item, 1);
  }

  CheckLogin() {
    if(this.$authServ.isConnected){
      this.router.navigateByUrl("/shopping/checkout");
    }else{
      this.router.navigateByUrl("/login");
    }
  }
}
