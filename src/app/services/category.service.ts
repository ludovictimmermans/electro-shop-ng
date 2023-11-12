import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../shared/models/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly BASE_URL = 'http://localhost:8080/categories'

  constructor(private client: HttpClient) { }

  getAll():Observable<Category[]>{
        return this.client.get<Category[]>(this.BASE_URL);
  }
}
