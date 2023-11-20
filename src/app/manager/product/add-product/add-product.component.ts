import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../../services/category.service";
import {CATEGORY_ADD_FORM} from "../../category/add-category/addCategory.form";
import {Category} from "../../../shared/models/category.model";
import {ProductService} from "../../../services/product.service";
import {PRODUCT_ADD_FORM} from "./addProduct.form";
import {Product} from "../../../shared/models/product.model";
import {Observable} from "rxjs";
import {Brand} from "../../../shared/models/brand.model";
import {BrandService} from "../../../services/brand.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  form!: FormGroup;
  categories$: Observable<Category[]>;
  brand$:Observable<Brand[]>;

  constructor(
    route: ActivatedRoute,
    private readonly $productServ: ProductService,
    private readonly $categoryServ: CategoryService,
    private readonly $brandServ: BrandService,
    builder: FormBuilder,
    private router:Router
  ) {
    this.form = builder.group(PRODUCT_ADD_FORM);
    this.categories$=$categoryServ.getAll();
    this.brand$=$brandServ.getAll()
  }

  onSubmit() {
    if(this.form.valid){
      const product : Product = {
        id:0,
        name:this.form.value.name,
        description:this.form.value.description,
        price:this.form.value.price,
        stock:this.form.value.quantity,
        categoryId:this.form.value.categoryId,
        brandId:this.form.value.brandId
      };
      console.log("valid et preparé")
      this.$productServ.add(product).subscribe(()=> this.router.navigateByUrl("manager/product/list"));
    }
  }

}
