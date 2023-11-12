import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import {ManagerRoutingModule} from "./manager-routing.module";
import { ListCategoryComponent } from './category/list-category/list-category.component';
import {TableModule} from "primeng/table";

const PRIME_IMPORTS = [TableModule,];

@NgModule({
  declarations: [
    ManagerComponent,
    ListCategoryComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    ...PRIME_IMPORTS
  ]
})
export class ManagerModule { }
