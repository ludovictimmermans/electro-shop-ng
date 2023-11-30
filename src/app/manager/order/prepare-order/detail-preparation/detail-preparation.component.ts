import { Component } from '@angular/core';
import {first, map, Observable, of, tap} from "rxjs";
import {Order} from "../../../../shared/models/order.model";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../../../../services/order.service";

@Component({
  selector: 'app-detail-preparation',
  templateUrl: './detail-preparation.component.html',
  styleUrls: ['./detail-preparation.component.scss']
})
export class DetailPreparationComponent {
  order$:Observable<Order>;
  orderId:number;


  constructor(private route:ActivatedRoute,
              private router:Router,
              private readonly $orderServ:OrderService) {
    this.orderId=this.route.snapshot.params["id"];
    this.order$ = this.$orderServ.getOne(this.orderId);
  }

  changeStatus(order:Order) {
    return this.$orderServ.nextStatus(order).subscribe(() => this.router.navigateByUrl("manager/order/preparation"));
  }
}
