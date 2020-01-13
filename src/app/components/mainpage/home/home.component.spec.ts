import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {NgForm, NgModel} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";

class MockRouter{
   navigate = jasmine.createSpy("navigate");
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent,NgForm,NgModel],
      providers:[{provide:Router,useClass:MockRouter}],
      imports:[HttpClientTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent,NgForm,NgModel],
      providers:[{provide:Router,useClass:MockRouter}]
    })
      .compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
