import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailComponent } from './modal-detail.component';
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('ModalDetailComponent', () => {
  let component: ModalDetailComponent;
  let fixture: ComponentFixture<ModalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDetailComponent ],
      providers:[HttpClient,HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
