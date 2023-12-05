import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, NgModel} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BRAND_ADD_FORM} from "./addBrand.form";
import {BrandService} from "../../../services/brand.service";
import {DynamicDialogRef} from "primeng/dynamicdialog";
import {Brand} from "../../../shared/models/brand.model";

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss'],
})
export class AddBrandComponent{
  form!: FormGroup;

  constructor(
    route: ActivatedRoute,
    private readonly $brandServ: BrandService,
    builder: FormBuilder,
    private router:Router,
    public ref: DynamicDialogRef,
  ) {
    this.form = builder.group(BRAND_ADD_FORM);
  }




  onSubmit() {

    if(this.form.valid){
      const brand : Brand = {
        id:0,
        name:this.form.value.name,
        img:this.form.value.img
      };
      this.$brandServ.add(brand).subscribe(()=> {
        this.ref.close(brand);
      });

    }
  }
}
