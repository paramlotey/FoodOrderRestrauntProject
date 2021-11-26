import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxOtpInputModule } from 'ngx-otp-input';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardCompComponent } from './dashboard-comp/dashboard-comp.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MapresultsComponent } from './mapresults/mapresults.component';
import { OtpComponent } from './otp/otp.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CurOrdersComponent } from './cur-orders/cur-orders.component';
import { PreOrdersComponent } from './pre-orders/pre-orders.component';


@NgModule({
  declarations: [
    DashboardCompComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MapresultsComponent,
    CurOrdersComponent,
    PreOrdersComponent,
    OtpComponent,
    ContactComponent,
    MenuComponent,
    AboutUsComponent,
    CurOrdersComponent,
    PreOrdersComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxOtpInputModule,
  ]
})
export class DashboardModule { }
