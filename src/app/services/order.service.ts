import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../shared/models/order.model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly BASE_URL = 'http://localhost:8080/order'
  constructor(private client: HttpClient) { }

  getAllByCustomer(customerId:number):Observable<Order[]>{
    return this.client.get<Order[]>(this.BASE_URL);
  }

  getOne(orderId: number) {
    return this.client.get<Order>(this.BASE_URL+'/'+orderId);
  }

  add(order: Order) {
    return this.client.post<Order>(this.BASE_URL,order);
  }

  delete(id: number) {
    return this.client.delete<Order>(this.BASE_URL+'/'+id);
  }
}
