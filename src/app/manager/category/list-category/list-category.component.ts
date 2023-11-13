import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {Category} from "../../../shared/models/category.model";
import {Observable} from "rxjs";
import {CategoryService} from "../../../services/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent{
  categories$: Observable<Category[]>;


  constructor(private readonly $categoryServ: CategoryService) {
    this.categories$ = this.$categoryServ.getAll();
  }

  delete(id:number) {
    // attention au timing, etre sur de l'ordre d'execution
      this.$categoryServ.delete(id).subscribe(() => this.loadCategory());
  }

  loadCategory(){
    this.categories$ = this.$categoryServ.getAll();
  }

  add() {

  }
}
