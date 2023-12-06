import { Component } from '@angular/core';
import {Category} from "../../../shared/models/category.model";
import {CategoryService} from "../../../services/category.service";
import {Observable, of, tap} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CATEGORY_UPDATE_FORM} from "./updateCategory.form";
import {Message, MessageService} from "primeng/api";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent {
  form!:FormGroup;

  $category!: Observable<Category>;
  private categoryId:number;
  messages!: Message[];


  constructor(
    private readonly $categoryServ: CategoryService,
    builder: FormBuilder,
    private messageService:MessageService,
    public ref:DynamicDialogRef,
    public config:DynamicDialogConfig
  ) {
    this.form = builder.group(CATEGORY_UPDATE_FORM);
    this.categoryId=this.config.data.id;
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
      this.$categoryServ.update(category).subscribe({
        next:()=> {
          this.ref.close(category);
        },
        error:() =>{
          this.messages=[{severity:'error',summary:'Erreur',detail:'Les données sont pas valides'}];
        }
      });

    }
  }
}
