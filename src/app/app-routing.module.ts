import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AuthGuard } from './auth.guard';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { CustomersComponent } from './customers/customers.component';
import { AnniversaryComponent } from './Anniversary/anniversary.component';
import { BestOfFlowersComponent } from './best-of-flowers/best-of-flowers.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { BestOfCakesComponent } from './best-of-cakes/best-of-cakes.component';
import { UniqueItemsComponent } from './unique-items/unique-items.component';
import { GiftHampersComponent } from './gift-hampers/gift-hampers.component';
import { CartComponent } from './cart/cart.component';
import { LogoutComponent } from './logout/logout.component';
import { IndoorPlantsComponent } from './indoor-plants/indoor-plants.component';
import { ChocolatesComponent } from './chocolates/chocolates.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReviewComponent } from './review/review.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', component:HeaderComponent },
 
  {
    path: 'header', 
    component: HeaderComponent,
    children: [
   
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
   {path:'home',component:HomeComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'my-accounts', component: MyAccountsComponent, canActivate: [AuthGuard] },
    { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
    { path: 'card', component: CardComponent },
    {path:'anniversary',component:AnniversaryComponent},
    {path:'best-of-cakes',component:BestOfCakesComponent},
    {path:'best-of-flowers',component:BestOfFlowersComponent},
    {path:'birthday',component:BirthdayComponent},
    {path:'unique-items',component:UniqueItemsComponent},
    {path:'gift-hampers',component:GiftHampersComponent},
    {path:'cart',component:CartComponent},
    {path:'indoor-plants',component:IndoorPlantsComponent},
    {path:'chocolates',component:ChocolatesComponent},
    {path:'contact-us',component:ContactUsComponent},
    {path:'review',component:ReviewComponent},
    { path: 'order', component: OrderComponent}
  
    ]
  },
    
    {
      path: 'header-admin', 
      component: HeaderAdminComponent,
      children: [
        { path: 'products', component: ProductsComponent },
        { path: 'customers', component: CustomersComponent },  
        { path: 'categories', component: CategoriesComponent }
      ]
    }
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
