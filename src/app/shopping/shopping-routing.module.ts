import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ShoppingComponent} from "./shopping.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {ShoppingDetailComponent} from "./shopping-list/shopping-detail/shopping-detail.component";

const routes : Routes = [
    {
      path:'',
      component: ShoppingComponent,
      children:[
         {path:'cart',component:ShoppingCartComponent},
         {path:'product/:id',component:ShoppingDetailComponent}

        // {path:'update/:id',component:UpdateCustomerComponent},

      ]
    }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShoppingRoutingModule{

}
