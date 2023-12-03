import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StatsCount} from "../shared/models/statsCount.model";
import {Stat} from "../shared/models/stat.model";

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private readonly BASE_URL = 'http://localhost:8080/stat'

  constructor(private client: HttpClient) { }

  getCount():Observable<StatsCount>{
    return this.client.get<StatsCount>(this.BASE_URL+"/count")
  }

  getCountOrdersByYear():Observable<Stat[]>{
    return this.client.get<Stat[]>(this.BASE_URL+"/orders/year");
  }
}
