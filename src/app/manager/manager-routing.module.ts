import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ManagerComponent} from "./manager.component";
import {ListCategoryComponent} from "./category/list-category/list-category.component";
import {CategoryResolver} from "../core/category.resolver";
import {UpdateCategoryComponent} from "./category/update-category/update-category.component";
import {AddCategoryComponent} from "./category/add-category/add-category.component";
import {AddBrandComponent} from "./brand/add-brand/add-brand.component";
import {UpdateBrandComponent} from "./brand/update-brand/update-brand.component";
import {ListBrandComponent} from "./brand/list-brand/list-brand.component";

const routes : Routes = [
  {
    path:'',
    component: ManagerComponent,
    children:[
      {path:'category/list',component:ListCategoryComponent,/*resolve:{categories : CategoryResolver}*/},
      {path:'category/update/:id',component:UpdateCategoryComponent,resolve:{categories : CategoryResolver}},
      {path:'category/add',component:AddCategoryComponent},
      {path:'brand/list',component:ListBrandComponent},
      {path:'brand/update/:id',component:UpdateBrandComponent},
      {path:'brand/add',component:AddBrandComponent}
    ]
  }
];

@NgModule({
  imports:  [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ManagerRoutingModule{

}
