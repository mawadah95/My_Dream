import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewComponent } from './new/new.component';
import { PaymentComponent } from './payment/payment.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'prodects', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'new', component: NewComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'about', component: AboutComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
