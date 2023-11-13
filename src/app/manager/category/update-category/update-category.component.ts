import { Component } from '@angular/core';
import {Category} from "../../../shared/models/category.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../../services/category.service";
import {Observable, of, tap} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CATEGORY_UPDATE_FORM} from "./updateCategory.form";
import {CategoryResolver} from "../../../core/category.resolver";

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent {
  form!:FormGroup;

  $category!: Observable<Category>;
  private categoryId:number;


  constructor(
    route: ActivatedRoute,
    private readonly $categoryServ: CategoryService,
    builder: FormBuilder,
    private router:Router
  ) {
    this.form = builder.group(CATEGORY_UPDATE_FORM);
    this.categoryId = route.snapshot.params['id'];
     this.$category = $categoryServ.getOne(this.categoryId).pipe(
      tap( data => this.form.patchValue({
        name: data.name,
        description: data.description
      }) )
    );
  }

  onSubmit() {
    if(this.form.valid){
      const category : Category = {
        id:this.categoryId,
        name:this.form.value.name,
        description:this.form.value.description
      };
      this.$categoryServ.update(category).subscribe();
      this.router.navigateByUrl("manager/category/list")
    }
  }
}
