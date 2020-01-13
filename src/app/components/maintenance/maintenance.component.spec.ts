import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MaintenanceComponent} from './maintenance.component';
import {AppComponent} from "../../app.component";
import {NavBarComponent} from "../mainpage/nav-bar/nav-bar.component";
import {HeaderComponent} from "../mainpage/header/header.component";
import {HomeComponent} from "../mainpage/home/home.component";
import {FooterComponent} from "../mainpage/footer/footer.component";
import {MechanicComponent} from "../mechanic/mechanic.component";
import {GeneralComponent} from "../general/general.component";
import {ErrorPageComponent} from "../mainpage/error-page/error-page.component";
import {ModalHomeComponent} from "../mechanic/modal-home/modal-home.component";
import {ModalDetailComponent} from "../mechanic/modal-detail/modal-detail.component";
import {ModalDetailGeneralComponent} from "../general/modal-detail-general/modal-detail-general.component";
import {ModalHomeGeneralComponent} from "../general/modal-home-general/modal-home-general.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../../app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from "../../../_modal";
import {HttpClientModule} from "@angular/common/http";
import * as firebase from "firebase";

describe('MaintenanceComponent', () => {
  let component: MaintenanceComponent;
  let fixture: ComponentFixture<MaintenanceComponent>;
  const firebaseConfig = {
    apiKey: "AIzaSyCKMJ7IDDBPSJNT0FNasMNsDo-9w3QO5bI",
    authDomain: "klmewa.firebaseapp.com",
    databaseURL: "https://klmewa.firebaseio.com",
    projectId: "klmewa",
    storageBucket: "klmewa.appspot.com",
    messagingSenderId: "876043107626",
    appId: "1:876043107626:web:911d1567bbd57f43507253",
    measurementId: "G-C9RGETWND2"
  };

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
        HttpClientModule

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    fixture = TestBed.createComponent(MaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
