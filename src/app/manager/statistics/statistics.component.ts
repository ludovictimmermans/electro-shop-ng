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
  stat$:Observable<Stat[]>;


  constructor(private readonly $statsServ:StatsService ) {
    this.statsCount$ = $statsServ.getCount();
    this.stat$ =$statsServ.getCountOrdersByYear();
  }
}
