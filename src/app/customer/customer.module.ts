import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import {ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterOutlet} from "@angular/router";
import { CustomerComponent } from './customer.component';
import {CustomerRoutingModule} from "./customer-routing.module";
import {PasswordModule} from "primeng/password";
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UpdatePwdComponent } from './update-pwd/update-pwd.component';



@NgModule({
  declarations: [
    CustomerComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    UpdatePwdComponent

  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet,
    PasswordModule
  ]
})
export class CustomerModule { }
