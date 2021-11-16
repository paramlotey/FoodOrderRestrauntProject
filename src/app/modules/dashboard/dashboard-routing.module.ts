import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCompComponent } from './dashboard-comp/dashboard-comp.component';
import { FoodresultsComponent } from './foodresults/foodresults.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MapresultsComponent } from './mapresults/mapresults.component';
import { ProfileComponent } from './profile/profile.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: "", component: DashboardCompComponent, 
  children: [
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "foodresults", component: FoodresultsComponent},
    {path: "login", component: LoginComponent},
    {path: "signup", component: SignupComponent},
    {path: "mapresults", component: MapresultsComponent},
    {path: "restaurants", component: RestaurantsComponent},
    {path: "profile", component: ProfileComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
