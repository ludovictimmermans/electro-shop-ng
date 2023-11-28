import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../shared/models/product.model";
import {Review} from "../shared/models/review.model";
import {Filter} from "../shared/models/filter.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly BASE_URL = 'http://localhost:8080/products'

  constructor(private client: HttpClient) { }

  getAll():Observable<Product[]>{
        return this.client.get<Product[]>(this.BASE_URL);
  }

  getAllFiltered(filter?:Filter):Observable<Product[]>{
    const req = new HttpRequest("GET", this.BASE_URL+'/filter',filter, {})
    this.client.request<Product[]>(req)
    return this.client.get<Product[]>(this.BASE_URL+'/filter',);
  }

  getOne(productId: number) {
    return this.client.get<Product>(this.BASE_URL+'/'+productId);
  }

  add(product: Product) {
    return this.client.post<Product>(this.BASE_URL,product);
  }

  update(product:Product){
    return this.client.put<Product>(this.BASE_URL+'/'+product.id,product);
  }

  delete(id: number) {
    return this.client.delete<Product>(this.BASE_URL+'/'+id);
  }

  review(review:Review){
    return this.client.post<Review>('http://localhost:8080/review/'+review.productId,review);
  }

}
