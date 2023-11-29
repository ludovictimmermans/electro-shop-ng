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

  getOne(categoryId: number) {
    return this.client.get<Category>(this.BASE_URL+'/'+categoryId);
  }

  getOneByName(name: string) {
    return this.client.get<Category>(this.BASE_URL+'/search?name='+name);
  }

  add(category: Category) {
    return this.client.post<Category>(this.BASE_URL,category);
  }

  update(category:Category){
    return this.client.put<Category>(this.BASE_URL+'/'+category.id,category);
  }

  delete(id: number) {
    return this.client.delete<Category>(this.BASE_URL+'/'+id);
  }






}
