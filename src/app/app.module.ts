import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavBarComponent} from './components/mainpage/nav-bar/nav-bar.component';
import {HeaderComponent} from './components/mainpage/header/header.component';
import {HomeComponent} from './components/mainpage/home/home.component';
import {FooterComponent} from './components/mainpage/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
