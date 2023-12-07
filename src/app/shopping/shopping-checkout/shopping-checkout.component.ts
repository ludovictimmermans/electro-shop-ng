import { Component } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../shared/models/cart.model";

@Component({
  selector: 'app-shopping-checkout',
  templateUrl: './shopping-checkout.component.html',
  styleUrls: ['./shopping-checkout.component.scss']
})
export class ShoppingCheckoutComponent {
  cart: CartItem[];

  constructor(private readonly $cartServ:CartService) {
    this.cart = $cartServ.cart;
  }

  get total() {
    return this.$cartServ.total;
  }

  get TVA(){
    return (this.total/100)*21
  }
}
