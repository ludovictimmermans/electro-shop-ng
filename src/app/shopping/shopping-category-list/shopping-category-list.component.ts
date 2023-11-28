import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Brand} from "../../shared/models/brand.model";
import {filter, Observable} from "rxjs";
import {BrandService} from "../../services/brand.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../shared/models/product.model";
import {ProductService} from "../../services/product.service";
import {Category} from "../../shared/models/category.model";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-shopping-category-list',
  templateUrl: './shopping-category-list.component.html',
  styleUrls: ['./shopping-category-list.component.scss']
})
export class ShoppingCategoryListComponent implements OnInit {

  overlayVisible: boolean = false;
  selectedBrands?: Brand[];
  brands!: Brand[];
  //category$:Observable<Category>;
  products$: Observable<Product[]>;
  available?: boolean = false;


  constructor(private readonly brandServ:BrandService,
              private readonly $productServ:ProductService,
              private readonly $categoryServ:CategoryService,
              private route: ActivatedRoute) {
    this.products$ = this.$productServ.getAllFiltered(/*"Ordinateur portable"*/);
    //this.category$ = this.$categoryServ.
  }

  ngOnInit(): void {
    this.brands=this.route.snapshot.data['brands'];
  }


  toggle(){
    this.overlayVisible = ! this.overlayVisible;
  }

  filter(){
    console.log(this.selectedBrands)
  }
}
