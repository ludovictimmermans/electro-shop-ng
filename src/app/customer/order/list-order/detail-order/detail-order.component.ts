import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Order} from "../../../../shared/models/order.model";
import {OrderService} from "../../../../services/order.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../../../shared/models/product.model";

@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.scss']
})
export class DetailOrderComponent {
  order$!: Observable<Order>;
  orderId: number;
  products!:Product[];
  total!:number;

  constructor(
    private readonly $orderServ: OrderService,
    private route: ActivatedRoute
  ) {
    this.orderId = route.snapshot.params['id'];
    this.order$ = $orderServ.getOne(this.orderId);
    this.order$.subscribe({next: o => this.total=o.amount});

  }

  get TVA(){
    return (this.total/100)*21
  }



}
