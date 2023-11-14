import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable, tap} from "rxjs";
import {Category} from "../../../shared/models/category.model";
import {Brand} from "../../../shared/models/brand.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {CategoryService} from "../../../services/category.service";
import {BrandService} from "../../../services/brand.service";
import {Product} from "../../../shared/models/product.model";
import {PRODUCT_UPDATE_FORM} from "./updateProduct.form";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent {
  form!: FormGroup;
  products$!:Observable<Product>
  categories$: Observable<Category[]>;
  brand$:Observable<Brand[]>;
  private productId:number;



  constructor(
    route: ActivatedRoute,
    private readonly $productService: ProductService,
    private readonly $categoryServ: CategoryService,
    private readonly $brandServ: BrandService,
    builder: FormBuilder,
    private router:Router
  ) {
    this.form = builder.group(PRODUCT_UPDATE_FORM);
    this.categories$=$categoryServ.getAll();
    this.brand$=$brandServ.getAll();
    this.productId = route.snapshot.params['id'];
    this.products$ = $productService.getOne(this.productId).pipe(
      tap(data => this.form.patchValue({
        name: data.name,
        description: data.description,
        price: data.price,
        quantity: data.quantity,
        categoryId: data.categoryId,
        brandId: data.brandId
      }))
    );
  }

  onSubmit() {
    if(this.form.valid){
      const product : Product = {
        id:this.productId,
        name:this.form.value.name,
        description:this.form.value.description,
        price: this.form.value.price,
        quantity: this.form.value.quantity,
        categoryId: this.form.value.categoryId,
        brandId: this.form.value.brandId
      };
      this.$productService.update(product).subscribe();
      this.router.navigateByUrl("manager/product/list")
    }
  }
}
