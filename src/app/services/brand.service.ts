import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Brand} from "../shared/models/brand.model";

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private readonly BASE_URL = 'http://localhost:8080/brands'
  constructor(private client: HttpClient) { }

  getAll():Observable<Brand[]>{
    return this.client.get<Brand[]>(this.BASE_URL);
  }

  getOne(brandId: number) {
    return this.client.get<Brand>(this.BASE_URL+'/'+brandId);
  }

  add(brand: Brand) {
    return this.client.post<Brand>(this.BASE_URL,brand);
  }

  update(brand:Brand){
    return this.client.put<Brand>(this.BASE_URL+'/'+brand.id,brand);
  }

  delete(id: number) {
    return this.client.delete<Brand>(this.BASE_URL+'/'+id);
  }
}
