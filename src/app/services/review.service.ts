import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product} from "../shared/models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private readonly BASE_URL = 'http://localhost:8080/review';
  constructor(private client: HttpClient) { }
  getAvgByProduct(productId: number){
    return this.client.get<Number>(this.BASE_URL+'/avg/'+productId);
  }
}
