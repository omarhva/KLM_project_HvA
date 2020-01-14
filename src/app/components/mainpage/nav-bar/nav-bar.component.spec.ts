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
import * as firebase from "firebase";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ServicefbService} from "../../../services/servicefb.service";

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
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
        HttpClientTestingModule

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //Didier Guyon
  it('should be login in nav bar if not logged in', () => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    if (firebase.auth().currentUser == null){
      expect(compiled.querySelector('a').textContent).toBe("Login");
    } else{
      expect(compiled.querySelector('a').textContent).toBe("Mechanic");
    }

  });
  // Didier Guyon
  it('should not be login in nav bar if logged in', () => {
    let service = fixture.debugElement.injector.get(ServicefbService);

    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    if (service.returncurrentUser() != null){
      expect(compiled.querySelector('a').textContent).not.toBe("Login");
    } else {
      expect(compiled.querySelector('a').textContent).toBe("Login");
    }
  });

});
