import {OrderItem} from "./orderItem.model";
import {Customer} from "./customer.model";
import {DeliveryAddress} from "./DeliveryAddress.model";

export interface Order{
  id:number
  date : Date,
  delivery: Date,
  status : string,
  amount: number
  products? : OrderItem[]
  customer? : Customer
  address? : DeliveryAddress
}
