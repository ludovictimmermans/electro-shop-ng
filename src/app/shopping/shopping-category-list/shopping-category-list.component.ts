import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Brand} from "../../shared/models/brand.model";
import {filter, Observable, tap} from "rxjs";
import {BrandService} from "../../services/brand.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../shared/models/product.model";
import {ProductService} from "../../services/product.service";
import {Category} from "../../shared/models/category.model";
import {CategoryService} from "../../services/category.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-shopping-category-list',
  templateUrl: './shopping-category-list.component.html',
  styleUrls: ['./shopping-category-list.component.scss']
})
export class ShoppingCategoryListComponent implements OnInit {

  overlayVisible: boolean = false;
  selectedBrands?: string[];
  brands!: Brand[];
  category$:Observable<Category>;
  products$: Observable<Product[]>;
  available: boolean = false;
  min?: number;
  max?: number;
  name:string;


  constructor(private readonly brandServ:BrandService,
              private readonly $productServ:ProductService,
              private readonly $categoryServ:CategoryService,
              private readonly $cartServ:CartService,
              private route: ActivatedRoute) {
    this.name=this.route.snapshot.params["name"].replace("-"," ");
    this.category$ = this.$categoryServ.getOneByName(this.name).pipe(
      tap(
    this.products$ = this.$productServ.getAllFiltered(this.name)))
  }

  ngOnInit(): void {
    this.brands=this.route.snapshot.data['brands'];
  }


  toggle(){
    this.overlayVisible = ! this.overlayVisible;
  }

  filter(){
    this.products$=this.$productServ.getAllFiltered(this.name,this.selectedBrands,this.min,this.max,this.available);
  }

  addCart(product:Product) {
    this.$cartServ.AddToCart(product);
  }
}
