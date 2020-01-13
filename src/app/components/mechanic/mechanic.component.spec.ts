import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MechanicComponent} from './mechanic.component';
import {ServicefbService} from "../../services/servicefb.service";
import {ReactiveFormsModule} from "@angular/forms";
import {ModalHomeComponent} from "./modal-home/modal-home.component";
import {ModalModule} from "../../../_modal";
import {ModalDetailComponent} from "./modal-detail/modal-detail.component";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Router} from "@angular/router";

describe('MechanicComponent', () => {
  let component: MechanicComponent;
  let fixture: ComponentFixture<MechanicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MechanicComponent,ModalHomeComponent,ModalDetailComponent],
      providers:[HttpClient,HttpHandler,Router],
      imports:[ReactiveFormsModule,ModalModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MechanicComponent,ModalHomeComponent,ModalDetailComponent],
      providers:[HttpClient,HttpHandler,Router],
      imports:[ReactiveFormsModule,ModalModule]
    })
      .compileComponents();
    fixture = TestBed.createComponent(MechanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be Please login if not logged in', () => {
    fixture = TestBed.createComponent(MechanicComponent);
    let component = fixture.debugElement.componentInstance;
    let authService = fixture.debugElement.injector.get(ServicefbService);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toBe("Please login to access this list");
  });
});
