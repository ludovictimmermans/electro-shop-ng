import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./layout/login/login.component";
import {Page404Component} from "./layout/page404/page404.component";
import {HomeComponent} from "./layout/home/home.component";
import {AuthGuard} from "./guard/auth.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {
    path: 'manager', loadChildren: () => import ('./manager/manager.module').then(r => r.ManagerModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {path: 'customer', loadChildren: () => import ('./customer/customer.module').then(r => r.CustomerModule)},
  {
    path: 'shopping', loadChildren: () => import ('./shopping/shopping.module').then(r => r.ShoppingModule)
  },
  {path: 'login', component: LoginComponent},
  {path: '404', component: Page404Component},
  {path: '**', redirectTo: '404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
