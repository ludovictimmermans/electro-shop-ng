import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {DataViewModule} from "primeng/dataview";
import {InputNumberModule} from "primeng/inputnumber";
import {FormsModule} from "@angular/forms";
import {ShoppingRoutingModule} from "./shopping-routing.module";
import {ShoppingComponent} from "./shopping.component";
import {ButtonModule} from "primeng/button";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";
import {ShoppingDetailComponent} from "./shopping-list/shopping-detail/shopping-detail.component";
import { ReviewComponent } from './review/review.component';



@NgModule({
  declarations: [
    ShoppingComponent,
    ShoppingCartComponent,
    ShoppingListComponent,
    ShoppingDetailComponent,
    ReviewComponent
  ],
  exports: [
    ShoppingListComponent
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    DataViewModule,
    InputNumberModule,
    FormsModule,
    ButtonModule,
    RatingModule,
    TagModule
  ]
})
export class ShoppingModule { }
