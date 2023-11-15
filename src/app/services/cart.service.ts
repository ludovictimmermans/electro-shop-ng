import { Injectable } from '@angular/core';
import {CartItem, Product} from "../shared/models/product.model";

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  panier: CartItem[] = []

  constructor() { }

  AddToCart(produit: Product){
    const existingProduct = this.panier.filter(e => e.id == produit.id)[0];
    if( existingProduct ){
      existingProduct.qtt++;
    }
    else {
      this.panier.push({
        ...produit,
        qtt: 1
      })
    }
  }

  removeFromCart(produit: Product, qtt?:number) {
    const product = this.panier.filter(item=> item.id == produit.id)[0];

    if( qtt ){
      product.qtt -= qtt;
    }

    if( !qtt || product.qtt <= 0 ) {
      const productIndex = this.panier.indexOf( product );
      this.panier.splice( productIndex, 1 );
    }
  }

  get total(){
    let sum = 0;
    this.panier.forEach(item => sum += item.price * item.qtt)
    return sum;
  }

}
