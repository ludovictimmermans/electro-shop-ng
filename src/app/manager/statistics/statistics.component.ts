import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {StatsCount} from "../../shared/models/statsCount.model";
import {StatsService} from "../../services/stats.service";
import {Stat} from "../../shared/models/stat.model";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  statsCount$:Observable<StatsCount>;
  statOrder$:Observable<Stat[]>;
  statCategory$:Observable<Stat[]>;
  statProduct$:Observable<Stat[]>;


  constructor(private readonly $statsServ:StatsService ) {
    this.statsCount$ = $statsServ.getCount();
    this.statOrder$ =$statsServ.getCountOrdersByYear();
    this.statCategory$ =$statsServ.getSalesCountByCategory();
    this.statProduct$ =$statsServ.getProductsBestSales();

  }
}
