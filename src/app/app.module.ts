import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarComponent} from './components/mainpage/nav-bar/nav-bar.component';
import {HeaderComponent} from './components/mainpage/header/header.component';
import {HomeComponent} from './components/mainpage/home/home.component';
import {FooterComponent} from './components/mainpage/footer/footer.component';
import {MechanicComponent} from './components/mechanic/mechanic.component';
import {MaintenanceComponent} from './components/maintenance/maintenance.component';
import {GeneralComponent} from './components/general/general.component';
import {ErrorPageComponent} from "./components/mainpage/error-page/error-page.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {ModalModule} from "../_modal";
import { ModalHomeComponent } from './components/mechanic/modal-home/modal-home.component';
import { ModalDetailComponent } from './components/mechanic/modal-detail/modal-detail.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MechanicComponent,
    MaintenanceComponent,
    GeneralComponent,
    ErrorPageComponent,
    ModalHomeComponent,
    ModalDetailComponent,



  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
