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

describe('MaintenanceComponent', () => {
  let component: MaintenanceComponent;
  let fixture: ComponentFixture<MaintenanceComponent>;

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
    fixture = TestBed.createComponent(MaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
