import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AddCustomerComponent} from "./add-customer/add-customer.component";
import {CustomerComponent} from "./customer.component";
import {UpdateCustomerComponent} from "./update-customer/update-customer.component";

const routes : Routes = [
    {
      path:'',
      component: CustomerComponent,
      children:[
        {path:'add',component:AddCustomerComponent},
        {path:'update/:id',component:UpdateCustomerComponent},

      ]
    }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CustomerRoutingModule{

}
