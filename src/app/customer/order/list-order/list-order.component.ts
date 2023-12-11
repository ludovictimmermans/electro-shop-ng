import { Component } from '@angular/core';
import {Order} from "../../../shared/models/order.model";
import { Observable} from "rxjs";
import {OrderService} from "../../../services/order.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent {
  order$!: Observable<Order[]>;
  customerId!:number;

  constructor(
    private readonly $orderServ:OrderService,
    private route:ActivatedRoute
  ){
    this.customerId=route.snapshot.params['id'];
    this.order$ = $orderServ.getAllByCustomer(this.customerId);
  }


  protected readonly Date = Date;
}
