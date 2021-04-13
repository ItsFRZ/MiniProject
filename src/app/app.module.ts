import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Component/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Component/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { ListMedicineComponent } from './Component/list-medicine/list-medicine.component';
import { FooterComponent } from './Component/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { AddMedicinesComponent } from './Component/add-medicines/add-medicines.component';
import { LoginComponent } from './Component/login/login.component';
import { ErrorComponent } from './Component/error/error.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ConsoleComponent } from './Component/console/console.component';
import { LogoutComponent } from './Component/logout/logout.component';
import { SearchComponent } from './Component/search/search.component';
import { FilterCityPipe } from './Pipes/filter-city.pipe';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ListMedicineComponent,
    FooterComponent,
    AddMedicinesComponent,
    LoginComponent,
    ErrorComponent,
    ConsoleComponent,
    LogoutComponent,
    SearchComponent,
    FilterCityPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
