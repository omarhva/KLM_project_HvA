import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHomeGeneralComponent } from './modal-home-general.component';
import {ModalDetailGeneralComponent} from "../modal-detail-general/modal-detail-general.component";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ModalHomeGeneralComponent', () => {
  let component: ModalHomeGeneralComponent;
  let fixture: ComponentFixture<ModalHomeGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHomeGeneralComponent,ModalDetailGeneralComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHomeGeneralComponent,ModalDetailGeneralComponent ],
      imports:[HttpClientTestingModule]
    })
      .compileComponents();
    fixture = TestBed.createComponent(ModalHomeGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
