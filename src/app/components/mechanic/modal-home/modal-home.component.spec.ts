import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHomeComponent } from './modal-home.component';
import {ModalDetailComponent} from "../modal-detail/modal-detail.component";
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('ModalHomeComponent', () => {
  let component: ModalHomeComponent;
  let fixture: ComponentFixture<ModalHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHomeComponent,ModalDetailComponent],
      providers:[HttpClient,HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHomeComponent,ModalDetailComponent],
      providers:[HttpClient,HttpHandler]
    })
      .compileComponents();
    fixture = TestBed.createComponent(ModalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
