import { TestBed } from '@angular/core/testing';

import { ServicefbService } from './servicefb.service';
import {Router} from "@angular/router";
import * as firebase from "firebase";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

class MockRouter{
  navigate = jasmine.createSpy("navigate");
}

describe('ServicefbService', () => {
  let service: ServicefbService;
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

  beforeEach(
    () =>{
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

      TestBed.configureTestingModule({
        declarations: [],
        imports: [HttpClientTestingModule, RouterTestingModule,  FormsModule,
          ReactiveFormsModule],
        providers:[{provide:Router,useClass:MockRouter,HttpClientTestingModule}]

      })
      service= TestBed.get(ServicefbService);
});

  it('should be created', () => {
    const service: ServicefbService = TestBed.get(ServicefbService);
    expect(service).toBeTruthy();
  });
});
