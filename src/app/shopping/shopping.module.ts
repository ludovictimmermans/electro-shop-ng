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
import {DropdownModule} from "primeng/dropdown";
import {AutoFocusModule} from "primeng/autofocus";
import {TabViewModule} from "primeng/tabview";
import {ImageModule} from "primeng/image";
import {TabMenuModule} from "primeng/tabmenu";
import {AccordionModule} from "primeng/accordion";
import {CarouselModule} from "primeng/carousel";
import { ShoppingCheckoutComponent } from './shopping-checkout/shopping-checkout.component';
import {AvailableDirective} from "./directives/available.directive";
import {AvailablePipe} from "./pipe/available.pipe";
import {DialogService} from "primeng/dynamicdialog";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";



@NgModule({
  declarations: [
    ShoppingComponent,
    ShoppingCartComponent,
    ShoppingListComponent,
    ShoppingDetailComponent,
    ShoppingCategoryListComponent,
    ShoppingCheckoutComponent,
    AvailableDirective,
    AvailablePipe
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
    ReactiveFormsModule,
    DropdownModule,
    AutoFocusModule,
    TabViewModule,
    ImageModule,
    TabMenuModule,
    AccordionModule,
    CarouselModule,
    ToastModule
  ],
  providers:[DialogService,MessageService]
})
export class ShoppingModule { }
