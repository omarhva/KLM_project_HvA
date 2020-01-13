import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NavBarComponent} from "./components/mainpage/nav-bar/nav-bar.component";
import {HeaderComponent} from "./components/mainpage/header/header.component";
import {HomeComponent} from "./components/mainpage/home/home.component";
import {FooterComponent} from "./components/mainpage/footer/footer.component";
import {MechanicComponent} from "./components/mechanic/mechanic.component";
import {MaintenanceComponent} from "./components/maintenance/maintenance.component";
import {GeneralComponent} from "./components/general/general.component";
import {ErrorPageComponent} from "./components/mainpage/error-page/error-page.component";
import {ModalHomeComponent} from "./components/mechanic/modal-home/modal-home.component";
import {ModalDetailComponent} from "./components/mechanic/modal-detail/modal-detail.component";
import {ModalDetailGeneralComponent} from "./components/general/modal-detail-general/modal-detail-general.component";
import {ModalHomeGeneralComponent} from "./components/general/modal-home-general/modal-home-general.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from "../_modal";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        ModalDetailGeneralComponent,
        ModalHomeGeneralComponent,




      ],
      imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule,
        HttpClientTestingModule

      ]
      ,
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'EWA-Application'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('EWA-Application');
  });

});
