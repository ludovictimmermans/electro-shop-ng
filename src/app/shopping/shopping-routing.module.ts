import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ShoppingComponent} from "./shopping.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {ShoppingDetailComponent} from "./shopping-list/shopping-detail/shopping-detail.component";
import {ShoppingCategoryListComponent} from "./shopping-category-list/shopping-category-list.component";
import {BrandResolver} from "../core/brand.resolver";
import {ShoppingCheckoutComponent} from "./shopping-checkout/shopping-checkout.component";
import {ShoppingPayementComponent} from "./shopping-payement/shopping-payement.component";

const routes : Routes = [
    {
      path:'',
      component: ShoppingComponent,
      children:[
         {path:'cart',component:ShoppingCartComponent},
         {path:'checkout',component:ShoppingCheckoutComponent},
         {path:'product/:id',component:ShoppingDetailComponent},
        {path:'payement',component:ShoppingPayementComponent},
         {path:':name',component:ShoppingCategoryListComponent,resolve:{brands : BrandResolver}}




        // {path:'update/:id',component:UpdateCustomerComponent,canActivate: [AuthGuard],
        //     data: {
        //       role: 'CUSTOMER'
        //     }},

      ]
    }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShoppingRoutingModule{

}
