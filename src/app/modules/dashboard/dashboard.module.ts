import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardCompComponent } from './dashboard-comp/dashboard-comp.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FoodresultsComponent } from './foodresults/foodresults.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    DashboardCompComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FoodresultsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
