import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {DataViewModule} from "primeng/dataview";
import {InputNumberModule} from "primeng/inputnumber";
import {FormsModule} from "@angular/forms";
import {ShoppingRoutingModule} from "./shopping-routing.module";
import {ShoppingComponent} from "./shopping.component";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [
    ShoppingComponent,
    ShoppingCartComponent
  ],
    imports: [
        CommonModule,
        ShoppingRoutingModule,
        DataViewModule,
        InputNumberModule,
        FormsModule,
        ButtonModule
    ]
})
export class ShoppingModule { }
