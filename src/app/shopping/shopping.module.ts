import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {DataViewModule} from "primeng/dataview";
import {InputNumberModule} from "primeng/inputnumber";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ShoppingRoutingModule} from "./shopping-routing.module";
import {ShoppingComponent} from "./shopping.component";
import {ButtonModule} from "primeng/button";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";
import {ShoppingDetailComponent} from "./shopping-list/shopping-detail/shopping-detail.component";
import { ShoppingCategoryListComponent } from './shopping-category-list/shopping-category-list.component';
import {BadgeModule} from "primeng/badge";
import {MenuModule} from "primeng/menu";
import {DividerModule} from "primeng/divider";
import {OverlayModule} from "primeng/overlay";
import { MultiSelectModule } from 'primeng/multiselect';
import {ToggleButtonModule} from "primeng/togglebutton";
import {RippleModule} from "primeng/ripple";
import {StyleClassModule} from "primeng/styleclass";
import {SliderModule} from "primeng/slider";
import {InputTextModule} from "primeng/inputtext";
import {GalleriaModule} from "primeng/galleria";
import {CheckboxModule} from "primeng/checkbox";



@NgModule({
  declarations: [
    ShoppingComponent,
    ShoppingCartComponent,
    ShoppingListComponent,
    ShoppingDetailComponent,
    ShoppingCategoryListComponent
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
        TagModule,
        BadgeModule,
        MenuModule,
        DividerModule,
        OverlayModule,
        MultiSelectModule,
        ToggleButtonModule,
        RippleModule,
        StyleClassModule,
        SliderModule,
        InputTextModule,
        GalleriaModule,
        CheckboxModule,
        ReactiveFormsModule
    ]
})
export class ShoppingModule { }
