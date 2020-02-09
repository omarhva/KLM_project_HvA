import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MechanicComponent} from './mechanic.component';
import {ServicefbService} from "../../services/servicefb.service";
import {ReactiveFormsModule} from "@angular/forms";
import {ModalHomeComponent} from "./modal-home/modal-home.component";
import {ModalModule} from "../../../_modal";
import {ModalDetailComponent} from "./modal-detail/modal-detail.component";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Router} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import * as firebase from "firebase";

class MockRouter{
  navigate = jasmine.createSpy("navigate");
}


describe('MechanicComponent', () => {
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
  let component: MechanicComponent;
  let fixture: ComponentFixture<MechanicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MechanicComponent,ModalHomeComponent,ModalDetailComponent],
      providers:[{provide:Router,useClass:MockRouter}],
      imports:[ReactiveFormsModule,ModalModule,HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MechanicComponent,ModalHomeComponent,ModalDetailComponent],
      providers:[{provide:Router,useClass:MockRouter}],
      imports:[ReactiveFormsModule,ModalModule,HttpClientTestingModule]
    })
      .compileComponents();

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    fixture = TestBed.createComponent(MechanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be Please login if not logged in', () => {
  //   fixture = TestBed.createComponent(MechanicComponent);
  //   let component = fixture.debugElement.componentInstance;
  //   let authService = fixture.debugElement.injector.get(ServicefbService);
  //   fixture.detectChanges();
  //   let compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('p').textContent).toBe("Please login to access this list");
  // });
});
