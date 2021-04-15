import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMedicinesComponent } from './Component/add-medicines/add-medicines.component';
import { ConsoleComponent } from './Component/console/console.component';
import { ErrorComponent } from './Component/error/error.component';
import { HomeComponent } from './Component/home/home.component';
import { ListMedicineComponent } from './Component/list-medicine/list-medicine.component';
import { LoginComponent } from './Component/login/login.component';
import { LogoutComponent } from './Component/logout/logout.component';
import {RouteGuardService} from '../app/Services/route-guard.service';
import { SearchComponent } from './Component/search/search.component';
import { MedDetailsComponent } from './Component/med-details/med-details.component';
import { MapViewComponent } from './Component/map-view/map-view.component';

const routes: Routes = [
  
  {path : '' ,redirectTo : 'home', pathMatch : 'full'},
  {path : 'home' , component : HomeComponent}, 
  {path : 'details/home', redirectTo : 'home' , pathMatch : 'full' },
  {path : 'details/login', redirectTo : 'login' , pathMatch : 'full' },
  {path : 'details/console', redirectTo : 'console' , pathMatch : 'full' },
  {path : 'details/logout', redirectTo : 'logout' , pathMatch : 'full' },
  {path : 'map' , component : MapViewComponent}, 
  {path : 'store' , component : ListMedicineComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'logout' , component : LogoutComponent , canActivate : [RouteGuardService]},
  {path : 'console' , component : ConsoleComponent , canActivate : [RouteGuardService]},
  {path : 'add' , component : AddMedicinesComponent},
  {path : 'search/:mname' , component : SearchComponent},
  {path : 'details/:id' , component : MedDetailsComponent},
  {path : '**' , component : ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
