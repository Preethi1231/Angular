import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShowempComponent } from './showemp/showemp.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { FilterPipe } from './filter.pipe';
import { ProductComponent } from './product/product.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PaymentComponent } from './payment/payment.component';
import { EndComponent } from './end/end.component';
import { HeaderComponent } from './header/header.component';
// import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ShowempComponent,
   HomepageComponent,
   CartComponent,
   FilterPipe,
   ProductComponent,
   SlideshowComponent,
   PaymentComponent,
   EndComponent,
   HeaderComponent,
  //  HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }