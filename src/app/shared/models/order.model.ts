import {Product} from "./product.model";

export interface Order{
  id:number
  date : Date,
  delivery: Date,
  status : string,
  amount: number
  products? : Product[]
}
