import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../shared/models/product.model";
import {ProductService} from "../../services/product.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  products$: Observable<Product[]>;
  layout: "list" | "grid";


  constructor(private readonly $productServ: ProductService,
              private readonly $cartService:CartService) {
    this.products$ = this.$productServ.getAll();
    this.layout="grid";
  }

  add(product: Product) {
    this.$cartService.AddToCart(product);
  }
}
