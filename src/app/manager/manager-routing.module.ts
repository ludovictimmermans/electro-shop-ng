import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ManagerComponent} from "./manager.component";
import {ListCategoryComponent} from "./category/list-category/list-category.component";
import {CategoryResolver} from "../core/category.resolver";

const routes : Routes = [
  {
    path:'',
    component: ManagerComponent,
    children:[
      {path:'category/list',component:ListCategoryComponent,resolve:{categories : CategoryResolver}}
    ]
  }
];

@NgModule({
  imports:  [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ManagerRoutingModule{

}