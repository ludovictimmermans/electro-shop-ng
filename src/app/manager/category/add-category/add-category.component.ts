import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../../services/category.service";
import {Category} from "../../../shared/models/category.model";
import {CATEGORY_ADD_FORM} from "./addCategory.form";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  form!: FormGroup;

  constructor(
    route: ActivatedRoute,
    private readonly $categoryServ: CategoryService,
    builder: FormBuilder,
    private router:Router
  ) {
    this.form = builder.group(CATEGORY_ADD_FORM);
  }

  onSubmit() {
    if(this.form.valid){
      const category : Category = {
        id:0,
        name:this.form.value.name,
        description:this.form.value.description
      };
      this.$categoryServ.add(category).subscribe(()=>this.router.navigateByUrl("manager/category/list"));

    }
  }

}
