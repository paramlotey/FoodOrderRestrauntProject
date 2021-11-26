import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { CurOrdersComponent } from './cur-orders/cur-orders.component';
import { DashboardCompComponent } from './dashboard-comp/dashboard-comp.component';
import { HomeComponent } from './home/home.component';
import { MapresultsComponent } from './mapresults/mapresults.component';
import { MenuComponent } from './menu/menu.component';
import { PreOrdersComponent } from './pre-orders/pre-orders.component';

const routes: Routes = [
  {path: "", component: DashboardCompComponent, 
  children: [
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "about-us", component: AboutUsComponent},
    {path: "mapresults", component: MapresultsComponent},
    {path: "curorders", component: CurOrdersComponent},
    {path: "preoders", component: PreOrdersComponent},
    {path: "contact", component: ContactComponent},
    {path: "menu",component: MenuComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
