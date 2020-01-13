import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHomeGeneralComponent } from './modal-home-general.component';
import {ModalDetailGeneralComponent} from "../modal-detail-general/modal-detail-general.component";
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('ModalHomeGeneralComponent', () => {
  let component: ModalHomeGeneralComponent;
  let fixture: ComponentFixture<ModalHomeGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHomeGeneralComponent,ModalDetailGeneralComponent ],
      providers:[HttpClient,HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHomeGeneralComponent,ModalDetailGeneralComponent ],
      providers:[HttpClient,HttpHandler]
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
