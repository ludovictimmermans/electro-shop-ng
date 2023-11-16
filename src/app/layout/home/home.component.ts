import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../shared/models/product.model";
import {ProductService} from "../../services/product.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products$: Observable<Product[]>;
  layout: "list" | "grid";


  constructor(private readonly $productServ: ProductService,private readonly $cartService:CartService) {
    this.products$ = this.$productServ.getAll();
    this.layout="list";
  }

  add(product: Product) {

    this.$cartService.AddToCart(product);
  }
}
