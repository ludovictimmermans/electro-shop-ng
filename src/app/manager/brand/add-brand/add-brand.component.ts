import { Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BRAND_ADD_FORM} from "./addBrand.form";
import {BrandService} from "../../../services/brand.service";
import {DynamicDialogRef} from "primeng/dynamicdialog";
import {Brand} from "../../../shared/models/brand.model";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss'],
  providers:[MessageService]
})
export class AddBrandComponent{
  form!: FormGroup;
  preview!:string;

  constructor(
    private readonly $brandServ: BrandService,
    builder: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService
  ) {
    this.form = builder.group(BRAND_ADD_FORM);
  }

  onSubmit(){

    if(this.form.valid){
      const brand : Brand = {
        id:0,
        name:this.form.value.name,
        img:this.form.value.img
      };
      this.$brandServ.add(brand).subscribe({
        next:()=>{
          this.ref.close(brand);
        },
        error:()=>{
          console.log('erreur');
          this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "Ce nom de marque existe déja"});
          this.form.reset();
        }
      });
    }
  }

  imageChange() {
    this.preview = this.form.value.img;
  }
}
