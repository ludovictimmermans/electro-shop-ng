import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable, tap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {Brand} from "../../../shared/models/brand.model";
import {BrandService} from "../../../services/brand.service";
import {BRAND_UPDATE_FORM} from "./updateBrand.form";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.scss'],
})
export class UpdateBrandComponent {
  form!:FormGroup;

  $brand!: Observable<Brand>;
  private brandId:number;


  constructor(
    route: ActivatedRoute,
    private readonly $brandServ: BrandService,
    builder: FormBuilder,
    private router:Router
  ) {
    this.form = builder.group(BRAND_UPDATE_FORM);
    this.brandId = route.snapshot.params['id'];
    this.$brand = $brandServ.getOne(this.brandId).pipe(
      tap( data => this.form.patchValue({
        name: data.name,
        img: data.img
      }) )
    );
  }

  onSubmit() {
    if(this.form.valid){
      const brand : Brand = {
        id:this.brandId,
        name:this.form.value.name,
        img:this.form.value.img
      };
      this.$brandServ.update(brand).subscribe(()=>{
        this.router.navigateByUrl("manager/brand/list");

      });

    }
  }
}
