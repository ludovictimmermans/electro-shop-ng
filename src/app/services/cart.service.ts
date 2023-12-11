import {Injectable} from '@angular/core';
import {Product} from "../shared/models/product.model";
import {CartItem} from "../shared/models/cart.model";
import {HttpClient} from "@angular/common/http";
import {OrderItem} from "../shared/models/orderItem.model";
import {DeliveryAddress} from "../shared/models/DeliveryAddress.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartItem[] = []
  size: BehaviorSubject<number>=new BehaviorSubject<number>(0);

  private readonly BASE_URL = 'http://localhost:8080/order'

  constructor(private client: HttpClient) {
  }

  AddToCart(produit: Product) {
    const existingProduct = this.cart.filter(e => e.id == produit.id)[0];
    if (existingProduct) {
      existingProduct.qtt++;
    } else {
      this.cart.push({
        ...produit,
        qtt: 1
      })
    }
    this.size.next(this.cart.length)
  }

  removeFromCart(produit: Product, qtt?: number) {
    const product = this.cart.filter(item => item.id == produit.id)[0];

    if (qtt) {
      product.qtt -= qtt;
    }

    if (!qtt || product.qtt <= 0) {
      const productIndex = this.cart.indexOf(product);
      this.cart.splice(productIndex, 1);
    }
    this.size.next(this.cart.length)
  }

  get total() {
    let sum = 0;
    this.cart.forEach(item => sum += item.price * item.qtt)
    return sum;
  }

  get cartSize(){
    return this.size.asObservable();
  }

  orderCart(address:DeliveryAddress) {
    let list: OrderItem[] = [];
    this.cart.forEach(

      p => {
        list.push(new OrderItem(p,p.qtt));
      }
    );
    console.log(JSON.stringify(list));

    const order = {
      products: list,
      address: address
    }
    return this.client.post<Map<number, number>>(this.BASE_URL, order);
  }
}
