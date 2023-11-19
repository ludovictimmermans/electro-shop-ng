import { Injectable } from '@angular/core';
import {Product} from "../shared/models/product.model";
import {CartItem} from "../shared/models/cart.model";
import {HttpClient} from "@angular/common/http";
import {Order} from "../shared/models/order.model";
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartItem[] = []

  private readonly BASE_URL = 'http://localhost:8080/order'

  constructor(private client: HttpClient) { }

  AddToCart(produit: Product){
    const existingProduct = this.cart.filter(e => e.id == produit.id)[0];
    if( existingProduct ){
      existingProduct.qtt++;
    }
    else {
      this.cart.push({
        ...produit,
        qtt: 1
      })
    }
  }

  removeFromCart(produit: Product, qtt?:number) {
    const product = this.cart.filter(item=> item.id == produit.id)[0];

    if( qtt ){
      product.qtt -= qtt;
    }

    if( !qtt || product.qtt <= 0 ) {
      const productIndex = this.cart.indexOf( product );
      this.cart.splice( productIndex, 1 );
    }
  }

  get total(){
    let sum = 0;
    this.cart.forEach(item => sum += item.price * item.qtt)
    return sum;
  }

  orderCart(){
    let products: Map<number,number>=new Map<number, number>();
    this.cart.forEach(
      p => products.set(p.id,p.qtt)
    )
    const order : Order = {
      products : products
    }

    return this.client.post<Map<number,number>>(this.BASE_URL,order);
  }

}
