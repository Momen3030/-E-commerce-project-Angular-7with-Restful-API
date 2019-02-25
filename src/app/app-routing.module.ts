import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './components/product/product.component';
import {PageNotFoundComponentComponent} from './components/page-not-found-component/page-not-found-component.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {OrdersComponent} from './components/orders/orders.component';
import {AddproductComponent} from './components/addproduct/addproduct.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './auth.guard';
import {RegisterComponent} from './components/register/register.component';
import {CartproductsComponent} from './components/cartproducts/cartproducts.component';
import {AdminhomeComponent} from './components/adminhome/adminhome.component';


const routes: Routes = [
    {path: 'home', component : ProductComponent, canActivate: [AuthGuard]},
    {path: 'orders', component : OrdersComponent, canActivate: [AuthGuard]},
    {path: 'cartproducts', component: CartproductsComponent},
    {path: 'products', component : ProductComponent},
    {path: 'addnewproduct', component : AddproductComponent, canActivate: [AuthGuard]},
    {path: 'adminhome' , component: AdminhomeComponent, canActivate: [AuthGuard]},
    { path: 'product/:pid', component: ProductDetailsComponent },
    { path: '', redirectTo: '/products', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', component: PageNotFoundComponentComponent }


        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
