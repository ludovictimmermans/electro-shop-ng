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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { ListBrandComponent } from './brand/list-brand/list-brand.component';
import { AddBrandComponent } from './brand/add-brand/add-brand.component';
import { UpdateBrandComponent } from './brand/update-brand/update-brand.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import {AutoCompleteModule} from "primeng/autocomplete";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {ToastModule} from "primeng/toast";
import { PrepareOrderComponent } from './order/prepare-order/prepare-order.component';
import { DeliveryOrderComponent } from './order/delivery-order/delivery-order.component';
import { DetailPreparationComponent } from './order/prepare-order/detail-preparation/detail-preparation.component';
import { StatisticsComponent } from './statistics/statistics.component';
import {MenuModule} from "primeng/menu";
import {RippleModule} from "primeng/ripple";
import {ChartModule} from "primeng/chart";
import { BasicChartComponent } from './statistics/basic-chart/basic-chart.component';
import {DialogModule} from "primeng/dialog";
import {DialogService} from "primeng/dynamicdialog";

const PRIME_IMPORTS = [TableModule,ButtonModule];


@NgModule({
  declarations: [
    ManagerComponent,
    ListCategoryComponent,
    UpdateCategoryComponent,
    AddCategoryComponent,
    ListBrandComponent,
    AddBrandComponent,
    UpdateBrandComponent,
    ListProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    PrepareOrderComponent,
    DeliveryOrderComponent,
    DetailPreparationComponent,
    StatisticsComponent,
    BasicChartComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    ...PRIME_IMPORTS,
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    DropdownModule,
    InputNumberModule,
    ToastModule,
    MenuModule,
    RippleModule,
    ChartModule,
    DialogModule,
    FormsModule
  ],
  providers:[DialogService]
})
export class ManagerModule { }
