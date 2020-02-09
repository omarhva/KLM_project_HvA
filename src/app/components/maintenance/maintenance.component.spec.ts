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
import {EquipmentService} from "../../services/equipmentService.service";
import {ServicefbService} from "../../services/servicefb.service";

describe('MaintenanceComponent', () => {
  let component: MaintenanceComponent;
  let fixture: ComponentFixture<MaintenanceComponent>;
  let service: EquipmentService;

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

      ], providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    fixture = TestBed.createComponent(MaintenanceComponent);
    component = fixture.componentInstance;
    service = TestBed.get(EquipmentService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Omar Mulla Ibrahim
   * Student number: 500766035
   */

  // test 6 Here i check display Please login to access this list if you not logged in and if you logged in will see "Choose a department"
  it('should display Please login to access this list if you not logged in and Choose a department if you logged in', () => {
    firebase.auth().signInWithEmailAndPassword("omar@hva.nl", "123456789");
    let compiled = fixture.debugElement.nativeElement;
    if (firebase.auth().currentUser != null) {
      expect(compiled.querySelector('#choose').textContent).toBe("Choose a department");
    } else if (firebase.auth().currentUser == null) {
      expect(compiled.querySelector('#notLogged').textContent).toBe("Please login to access this list");
    }

  });
  // test 7 here i check if the respons full with the list
  it('should get the list from the backend and check if it full', () => {
    service.getAllEquipment().subscribe(response => {
      this.equipmentList = response;
      expect(response).toBeTruthy()
    });


  });
  // test 8 check if true url of the service used
  it('should have the true url of the service', () => {
    const expectedPath = 'http://localhost:8085/rest/';
    const realPath = service.url;
    expect(realPath).toEqual(expectedPath);

  });
  // test 9 i check the length of the list of equipment if it 12 becaus we only have 12 equipments in our data
  it('should return the good number of equipments in our data', () => {

    service.getAllEquipment().subscribe(response => {
      let actualSize = response.length;

      expect(actualSize).toEqual(12);
    });


  });

  //test 10 here i check if one of my equipment numbers is well available  in the response
  it('should found the equipment number is the response', () => {

    service.getAllEquipment().subscribe(response => {
      let actualSize = response;
      let myEquiNum = 102680;

      for (let i = 0; i < response.length; i++) {
        if (response[i].equipmentNr = myEquiNum)
          expect(response[i].equipmentNr).toEqual(myEquiNum);
      }
    });

  });

// test 11 here i check if we have more than one the same equipment in the list
  it('should check if we have repeat in our data', () => {

    service.getUnqiueEquipment().subscribe(response => {

      expect(response.length).toEqual(12);
    });

  });

});


