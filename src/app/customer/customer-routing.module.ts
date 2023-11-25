import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AddCustomerComponent} from "./add-customer/add-customer.component";
import {CustomerComponent} from "./customer.component";
import {UpdateCustomerComponent} from "./update-customer/update-customer.component";
import {UpdatePwdComponent} from "./update-pwd/update-pwd.component";
import {ListOrderComponent} from "./order/list-order/list-order.component";
import {DetailOrderComponent} from "./order/list-order/detail-order/detail-order.component";
import {ReviewComponent} from "./order/review/review.component";

const routes : Routes = [
    {
      path:'',
      component: CustomerComponent,
      children:[
        {path:'add',component:AddCustomerComponent},
        {path:'update/:id',component:UpdateCustomerComponent},
        {path:'pwd/:id',component: UpdatePwdComponent},
        {path:'order',component:ListOrderComponent},
        {path:'order/:id',component:DetailOrderComponent},
        {path:'review/:id',component: ReviewComponent}

      ]
    }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CustomerRoutingModule{

}
