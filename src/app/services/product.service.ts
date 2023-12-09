import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../shared/models/product.model";
import {Review} from "../shared/models/review.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly BASE_URL = 'http://localhost:8080/products'

  constructor(private client: HttpClient) { }

  getAll():Observable<Product[]>{
        return this.client.get<Product[]>(this.BASE_URL);
  }

  getAllFiltered(category?:string,brands?:string[],min?:number,max?:number,available?:boolean,nameSort?:string,direction?:string):Observable<Product[]>{
    let params = new HttpParams();
    if(category)
      params=params.append("category",category);
    if(min!=null || min!=undefined)
      params=params.append("min",min);
    if(max)
      params=params.append("max",max);
    if(brands!=null || brands!=undefined) {
      brands.forEach(b => params = params.append("brands", b) );
    }
    if(available)
      params=params.append("available",available);
    if(nameSort!=null || nameSort!=undefined)
      params=params.append("nameSort",nameSort);
    if(direction!=null || direction!=undefined)
      params=params.append("direction",direction);


    return this.client.get<Product[]>(this.BASE_URL+'/filter', { params: params });
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
