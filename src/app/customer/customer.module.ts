import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {ButtonModule} from "primeng/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterOutlet} from "@angular/router";
import {CustomerComponent} from './customer.component';
import {CustomerRoutingModule} from "./customer-routing.module";
import {PasswordModule} from "primeng/password";
import {UpdateCustomerComponent} from './update-customer/update-customer.component';
import {UpdatePwdComponent} from './update-pwd/update-pwd.component';
import {ListOrderComponent} from './order/list-order/list-order.component';
import {TableModule} from "primeng/table";
import {DetailOrderComponent} from './order/list-order/detail-order/detail-order.component';
import {DataViewModule} from "primeng/dataview";
import {CardModule} from 'primeng/card';
import {ReviewComponent} from "./order/review/review.component";
import {RatingModule} from "primeng/rating";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {CheckboxModule} from "primeng/checkbox";
import {RippleModule} from "primeng/ripple";
import {DividerModule} from "primeng/divider";
import { UpdateAddressComponent } from '../shopping/shopping-checkout/update-address/update-address.component';
import { AddAddressComponent } from '../shopping/shopping-checkout/add-address/add-address.component';
import {ImageModule} from "primeng/image";


@NgModule({
  declarations: [
    CustomerComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    UpdatePwdComponent,
    ListOrderComponent,
    DetailOrderComponent,
    ReviewComponent,
    UpdateAddressComponent,
    AddAddressComponent

  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet,
    PasswordModule,
    TableModule,
    DataViewModule,
    CardModule,
    RatingModule,
    FormsModule,
    InputTextareaModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    RippleModule,
    DividerModule,
    ImageModule
  ]
})
export class CustomerModule {
}
