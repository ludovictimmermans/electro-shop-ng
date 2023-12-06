import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../../services/category.service";
import {Category} from "../../../shared/models/category.model";
import {ProductService} from "../../../services/product.service";
import {PRODUCT_ADD_FORM} from "./addProduct.form";
import {Product} from "../../../shared/models/product.model";
import {Observable} from "rxjs";
import {Brand} from "../../../shared/models/brand.model";
import {BrandService} from "../../../services/brand.service";
import {Message, MessageService} from "primeng/api";
import {DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  form!: FormGroup;
  messages!:Message[];
  categories$: Observable<Category[]>;
  brand$:Observable<Brand[]>;

  constructor(
    route: ActivatedRoute,
    private readonly $productServ: ProductService,
    private readonly $categoryServ: CategoryService,
    private readonly $brandServ: BrandService,
    builder: FormBuilder,
    private messageService: MessageService,
    public ref:DynamicDialogRef
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
        stock:this.form.value.stock,
        categoryId:this.form.value.categoryId,
        brandId:this.form.value.brandId,
        pictures:[{url: this.form.value.url1},
          {url: this.form.value.url2},
          {url: this.form.value.url3},
          {url: this.form.value.url4}
        ]

      };
      this.$productServ.add(product).subscribe({
        next:()=>{
          this.ref.close(product);
        },
        error: () =>{
          this.messages=[{severity:'error',summary:'Erreur',detail:"Une erreur s'est produite"}]
        }
      });
    }
  }

}
