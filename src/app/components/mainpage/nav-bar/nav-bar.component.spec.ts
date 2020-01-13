import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavBarComponent} from './nav-bar.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {AppComponent} from "../../../app.component";
import {HeaderComponent} from "../header/header.component";
import {HomeComponent} from "../home/home.component";
import {FooterComponent} from "../footer/footer.component";
import {MechanicComponent} from "../../mechanic/mechanic.component";
import {MaintenanceComponent} from "../../maintenance/maintenance.component";
import {GeneralComponent} from "../../general/general.component";
import {ErrorPageComponent} from "../error-page/error-page.component";
import {ModalHomeComponent} from "../../mechanic/modal-home/modal-home.component";
import {ModalDetailComponent} from "../../mechanic/modal-detail/modal-detail.component";
import {ModalDetailGeneralComponent} from "../../general/modal-detail-general/modal-detail-general.component";
import {ModalHomeGeneralComponent} from "../../general/modal-home-general/modal-home-general.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../../app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from "../../../../_modal";
import {HttpClientModule} from "@angular/common/http";
import {initializeApp} from "firebase";
import * as firebase from "firebase";

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

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
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
