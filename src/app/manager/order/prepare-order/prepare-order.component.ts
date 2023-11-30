import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Order} from "../../../shared/models/order.model";
import {OrderService} from "../../../services/order.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-prepare-order',
  templateUrl: './prepare-order.component.html',
  styleUrls: ['./prepare-order.component.scss']
})
export class PrepareOrderComponent {
  order$:Observable<Order[]>;


  constructor(private readonly $orderServ:OrderService,private route:ActivatedRoute) {
    this.order$=this.$orderServ.getAllForPreparation();
  }
}
