import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: HomepageComponent
} ,
{
  path: 'products',
  component: ProductsComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'details/:id',
  component: DetailsComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
