import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GeneralComponent} from './general.component';
import {NgForm, ReactiveFormsModule} from "@angular/forms";
import {ModalHomeGeneralComponent} from "./modal-home-general/modal-home-general.component";
import {ModalModule} from "../../../_modal";
import {ModalDetailGeneralComponent} from "./modal-detail-general/modal-detail-general.component";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('GeneralComponent', () => {
  let component: GeneralComponent;
  let fixture: ComponentFixture<GeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralComponent,NgForm,ModalHomeGeneralComponent,ModalDetailGeneralComponent],
      providers:[HttpClient,HttpHandler,Router],
      imports:[ReactiveFormsModule,ModalModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
