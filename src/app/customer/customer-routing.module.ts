import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AddCustomerComponent} from "./add-customer/add-customer.component";
import {CustomerComponent} from "./customer.component";

const routes : Routes = [
    {
      path:'',
      component: CustomerComponent,
      children:[
        {path:'add',component:AddCustomerComponent},
      ]
    }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CustomerRoutingModule{

}
