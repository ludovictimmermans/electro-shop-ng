import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Brand} from "../../../shared/models/brand.model";
import {BRAND_ADD_FORM} from "./addBrand.form";
import {BrandService} from "../../../services/brand.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss'],
})
export class AddBrandComponent {
  form!: FormGroup;

  constructor(
    route: ActivatedRoute,
    private readonly $brandServ: BrandService,
    builder: FormBuilder,
    private router:Router
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
      this.$brandServ.add(brand).subscribe(()=>{
        this.router.navigateByUrl("manager/brand/list")
      });

    }
  }
}
