import { Component } from '@angular/core';
import {Category} from "../../../shared/models/category.model";
import {Observable, tap} from "rxjs";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent {
  categories$: Observable<Category[]>;


  constructor(private readonly $categoryServ: CategoryService) {
    this.categories$ = $categoryServ.getAll();
  }

}
