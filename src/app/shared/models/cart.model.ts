import {Product} from "./product.model";

export interface CartItem extends Product {
  qtt: number;
}
