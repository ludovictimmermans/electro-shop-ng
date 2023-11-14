import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../../shared/models/product.model";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {
  products$: Observable<Product[]>;

  constructor(private readonly $productServ: ProductService) {
    this.products$ = this.$productServ.getAll();
  }

  delete(id:number) {
    this.$productServ.delete(id).subscribe(() => this.loadProduct());
  }

  loadProduct(){
    this.products$ = this.$productServ.getAll();
  }

}
