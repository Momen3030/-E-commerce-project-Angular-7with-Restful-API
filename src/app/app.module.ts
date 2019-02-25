
import { NgModule } from '@angular/core';
import { ngfModule, ngf } from 'angular-file';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductComponent } from './components/product/product.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
 import {FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { CartproductsComponent } from './components/cartproducts/cartproducts.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavComponent,
    FooterComponent,
    MainComponent,
    PageNotFoundComponentComponent,
    ProductDetailsComponent,
    OrdersComponent,
    AddproductComponent,
    LoginComponent,
    RegisterComponent,
    CartproductsComponent,
    AdminhomeComponent,
    CarouselComponent,

  ],
  imports: [
    AppRoutingModule,
      BrowserModule,
      HttpClientModule, FormsModule, ReactiveFormsModule,
      ngfModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
