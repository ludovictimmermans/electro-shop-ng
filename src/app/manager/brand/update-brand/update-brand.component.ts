import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable, tap} from "rxjs";
import {Brand} from "../../../shared/models/brand.model";
import {BrandService} from "../../../services/brand.service";
import {BRAND_UPDATE_FORM} from "./updateBrand.form";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.scss']
})
export class UpdateBrandComponent {
  form!:FormGroup;
  preview!:string;

  $brand!: Observable<Brand>;
  private brandId:number;


  constructor(
    private readonly $brandServ: BrandService,
    builder: FormBuilder,
    private messageService:MessageService,
    public ref:DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this.form = builder.group(BRAND_UPDATE_FORM);
    this.brandId = this.config.data.id;
    this.$brand = $brandServ.getOne(this.brandId).pipe(
      tap( data =>{
        this.form.patchValue({
          name: data.name,
          img: data.img
        });
        this.preview=data.img;
      })
    );
  }

  onSubmit() {
    if(this.form.valid){
      const brand : Brand = {
        id:this.brandId,
        name:this.form.value.name,
        img:this.form.value.img
      };
      this.$brandServ.update(brand).subscribe({
        next:()=>{
          this.ref.close(brand)
        },
        error:() =>{
          this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "Les données sont pas valides"});
        }
      });

    }
  }

  imageChange() {
    this.preview = this.form.value.img;
  }
}
