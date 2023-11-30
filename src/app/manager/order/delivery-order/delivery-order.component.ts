import { Component } from '@angular/core';
import {delay, Observable} from "rxjs";
import {Order} from "../../../shared/models/order.model";
import {OrderService} from "../../../services/order.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-delivery-order',
  templateUrl: './delivery-order.component.html',
  styleUrls: ['./delivery-order.component.scss']
})
export class DeliveryOrderComponent {

  order$:Observable<Order[]>;


  constructor(private readonly $orderServ:OrderService,private route:ActivatedRoute) {
    this.order$ = this.$orderServ.getAllForDelivery();
  }

  delivery(order:Order) {
    return this.$orderServ.nextStatus(order).subscribe();
  }

  delay(order:Order){
    return this.$orderServ.delay(order).subscribe(()=>this.order$=this.$orderServ.getAllForDelivery());
  }
}
