import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardCompComponent } from './dashboard-comp/dashboard-comp.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FoodresultsComponent } from './foodresults/foodresults.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MapresultsComponent } from './mapresults/mapresults.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ProfileComponent } from './profile/profile.component';
import { PricingComponent } from './pricing/pricing.component';
import { SubmitComponent } from './submit/submit.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    DashboardCompComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FoodresultsComponent,
    LoginComponent,
    SignupComponent,
    MapresultsComponent,
    RestaurantsComponent,
    ProfileComponent,
    PricingComponent,
    SubmitComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
