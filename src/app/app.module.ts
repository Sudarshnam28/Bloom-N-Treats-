import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CountryPipe } from './country.pipe';
import { AnniversaryComponent } from './Anniversary/anniversary.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { BestOfFlowersComponent } from './best-of-flowers/best-of-flowers.component';
import { BestOfCakesComponent } from './best-of-cakes/best-of-cakes.component';
import { UniqueItemsComponent } from './unique-items/unique-items.component';
import { GiftHampersComponent } from './gift-hampers/gift-hampers.component';
import { ChocolatesComponent } from './chocolates/chocolates.component';
import { IndoorPlantsComponent } from './indoor-plants/indoor-plants.component';
import { FooterComponent } from './footer/footer.component';
import {GiftFinderComponent} from './gift-finder/gift-finder.component'
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReviewComponent } from './review/review.component';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    LogoutComponent,
    MyAccountsComponent,
    MyOrdersComponent,
    CategoriesComponent,
    CartComponent,
    ProductsComponent,
    HeaderAdminComponent,
    CustomersComponent,
    CountryPipe,
    AnniversaryComponent,
    BirthdayComponent,
    BestOfFlowersComponent,
    BestOfCakesComponent,
    UniqueItemsComponent,
    GiftHampersComponent,
    ChocolatesComponent,
    IndoorPlantsComponent,
    FooterComponent,
    GiftFinderComponent,
    OrderComponent,
    AboutComponent,
    ContactUsComponent,
    ReviewComponent
    
    
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
