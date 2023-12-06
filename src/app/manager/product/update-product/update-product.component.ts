import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable, tap} from "rxjs";
import {Category} from "../../../shared/models/category.model";
import {Brand} from "../../../shared/models/brand.model";
import {ProductService} from "../../../services/product.service";
import {CategoryService} from "../../../services/category.service";
import {BrandService} from "../../../services/brand.service";
import {Product} from "../../../shared/models/product.model";
import {PRODUCT_UPDATE_FORM} from "./updateProduct.form";
import {Message, MessageService} from "primeng/api";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent{
  form!: FormGroup;
  products$!:Observable<Product>
  categories$: Observable<Category[]>;
  brand$:Observable<Brand[]>;
  private productId:number;
  messages!: Message[];



  constructor(
    private readonly $productService: ProductService,
    private readonly $categoryServ: CategoryService,
    private readonly $brandServ: BrandService,
    builder: FormBuilder,
    private messageService:MessageService,
    public ref:DynamicDialogRef,
    public config:DynamicDialogConfig
  ) {
    this.form = builder.group(PRODUCT_UPDATE_FORM);
    this.categories$=$categoryServ.getAll();
    this.brand$=$brandServ.getAll();
    this.productId = this.config.data.id;
    this.products$ = $productService.getOne(this.productId).pipe(
      tap((data:any) => this.form.patchValue({
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock,
        categoryId: data.category.id,
        brandId: data.brand.id
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
        stock: this.form.value.stock,
        categoryId: this.form.value.categoryId,
        brandId: this.form.value.brandId
      };
      this.$productService.update(product).subscribe({
          next:()=>{
            this.ref.close(product)
          },
          error:()=>{
            this.messages=[{severity:'error',summary:'Erreur',detail:"une erreur s'est produite"}]
          }
        }
      );

    }
  }
}
