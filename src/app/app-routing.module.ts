import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CartComponent} from './cart/cart.component';
import {ProductComponent} from './product/product.component';
import {ShowempComponent} from './showemp/showemp.component';
import {SlideshowComponent} from './slideshow/slideshow.component';
import {PaymentComponent} from './payment/payment.component';
import { EndComponent } from './end/end.component';
import { HeaderComponent } from './header/header.component';

// import {HeaderComponent} from './header/header.component';
const routes: Routes = [{path:'login',component: LoginComponent},
{path:'register', component : RegisterComponent},
{path:'cart', component : CartComponent},
{path:'product', component : ProductComponent},
{path:'showemp', component : ShowempComponent},
{path :'slideshow', component : SlideshowComponent},
{path :'payment', component : PaymentComponent},
{path:'end',component:EndComponent},
{path:'header',component:HeaderComponent },

// {path:'header',component:HeaderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
