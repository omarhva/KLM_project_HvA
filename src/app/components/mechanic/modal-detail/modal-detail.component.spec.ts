import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailComponent } from './modal-detail.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ModalDetailComponent', () => {
  let component: ModalDetailComponent;
  let fixture: ComponentFixture<ModalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDetailComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDetailComponent ],
      imports:[HttpClientTestingModule]
    })
      .compileComponents();
    fixture = TestBed.createComponent(ModalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
