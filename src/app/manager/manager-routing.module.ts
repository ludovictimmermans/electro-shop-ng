import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ManagerComponent} from "./manager.component";
import {ListCategoryComponent} from "./category/list-category/list-category.component";
import {CategoryResolver} from "../core/category.resolver";
import {UpdateCategoryComponent} from "./category/update-category/update-category.component";

const routes : Routes = [
  {
    path:'',
    component: ManagerComponent,
    children:[
      {path:'category/list',component:ListCategoryComponent,/*resolve:{categories : CategoryResolver}*/},
      {path:'category/update/:id',component:UpdateCategoryComponent,resolve:{categories : CategoryResolver}}
    ]
  }
];

@NgModule({
  imports:  [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ManagerRoutingModule{

}
