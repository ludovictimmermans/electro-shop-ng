import { Component } from '@angular/core';
import {Product} from "../../../shared/models/product.model";
import {Observable} from "rxjs";
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.scss']
})
export class ShoppingDetailComponent {
  product$:Observable<Product>;
  private productId: number;


  constructor( route: ActivatedRoute,private readonly $productServ:ProductService,private readonly $cartService:CartService) {
    this.productId = route.snapshot.params['id'];
    this.product$ = this.$productServ.getOne(this.productId);
  }

  add(product: Product) {
    this.$cartService.AddToCart(product);
  }
}
