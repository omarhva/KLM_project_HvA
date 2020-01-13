import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailGeneralComponent } from './modal-detail-general.component';
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('ModalDetailGeneralComponent', () => {
  let component: ModalDetailGeneralComponent;
  let fixture: ComponentFixture<ModalDetailGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDetailGeneralComponent ],
      providers:[HttpClient,HttpHandler],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
