import { Component } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../shared/models/cart.model";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  cart: CartItem[];

  constructor(
    private readonly $cartServ: CartService
  ) {
    this.cart = $cartServ.cart;
  }

  get total() {
    return this.$cartServ.total;
  }

  removeAll(item: CartItem){
    this.$cartServ.removeFromCart(item);
  }

  removeOne(item: CartItem){
    this.$cartServ.removeFromCart(item, 1);
  }

    protected readonly parseInt = parseInt;

  makeOrder() {
    this.$cartServ.orderCart().subscribe();
  }
}
