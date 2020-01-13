import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GeneralComponent} from './general.component';
import {NgForm, ReactiveFormsModule} from "@angular/forms";
import {ModalHomeGeneralComponent} from "./modal-home-general/modal-home-general.component";
import {ModalModule} from "../../../_modal";
import {ModalDetailGeneralComponent} from "./modal-detail-general/modal-detail-general.component";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Router} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import * as firebase from "firebase";

class MockRouter{
  navigate = jasmine.createSpy("navigate");
}

describe('GeneralComponent', () => {
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
  let component: GeneralComponent;
  let fixture: ComponentFixture<GeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [GeneralComponent,NgForm,ModalHomeGeneralComponent,ModalDetailGeneralComponent],
      providers:[{provide:Router,useClass:MockRouter}],
      imports:[ReactiveFormsModule,ModalModule,HttpClientTestingModule]
    })
      .compileComponents();
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }));

  beforeEach(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp({});
    }
    fixture = TestBed.createComponent(GeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
