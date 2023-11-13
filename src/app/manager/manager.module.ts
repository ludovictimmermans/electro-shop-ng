import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import {ManagerRoutingModule} from "./manager-routing.module";
import { ListCategoryComponent } from './category/list-category/list-category.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {ReactiveFormsModule} from "@angular/forms";
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { ListBrandComponent } from './brand/list-brand/list-brand.component';
import { AddBrandComponent } from './brand/add-brand/add-brand.component';
import { UpdateBrandComponent } from './brand/update-brand/update-brand.component';

const PRIME_IMPORTS = [TableModule,ButtonModule];

@NgModule({
  declarations: [
    ManagerComponent,
    ListCategoryComponent,
    UpdateCategoryComponent,
    AddCategoryComponent,
    ListBrandComponent,
    AddBrandComponent,
    UpdateBrandComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    ...PRIME_IMPORTS,
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule
  ]
})
export class ManagerModule { }
