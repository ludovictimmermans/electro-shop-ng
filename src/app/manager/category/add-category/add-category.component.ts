import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CategoryService} from "../../../services/category.service";
import {Category} from "../../../shared/models/category.model";
import {CATEGORY_ADD_FORM} from "./addCategory.form";
import {Message, MessageService} from "primeng/api";
import {DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  form!: FormGroup;
  messages!: Message[];

  constructor(
    private readonly $categoryServ: CategoryService,
    builder: FormBuilder,
    public ref:DynamicDialogRef,
    private messageService : MessageService
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
      this.$categoryServ.add(category).subscribe({
        next:()=>{
          this.ref.close(category);
        },
        error:()=>{
          this.form.reset();
          this.messages=[{ severity: 'error', summary: 'Erreur', detail: "Ce nom de catégorie existe déja"}];
        }
      });
    }
  }
}
