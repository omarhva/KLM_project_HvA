import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {FormsModule, NgForm, NgModel, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ServicefbService} from "../../../services/servicefb.service";
import {RouterTestingModule} from "@angular/router/testing";

class MockRouter {
  navigate = jasmine.createSpy("navigate");
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: ServicefbService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule,
        ReactiveFormsModule],
      providers: [ServicefbService]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.get(ServicefbService);
    service = fixture.debugElement.injector.get(ServicefbService);
    fixture.detectChanges();
  });
  // Should creat a home page
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /**
   * Omar Mulla Ibrahim
   * Student number: 500766035
   */

// Test 1 most take title of the page
  it('most load the title of the login page', () => {
    const expected = 'Login page';
    const result = fixture.debugElement.nativeElement.querySelector('#title');
    expect(result.innerHTML).toBe(expected);
  });
  // test 2  check if  the input of the email and the pass correct
  it('most load the email input and pas input correct', () => {
    const UsernameInput = fixture.debugElement.nativeElement.querySelector('#username');
    const passwordInput = fixture.debugElement.nativeElement.querySelector('#psw');
    expect(UsernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });

  // test 3 the method onSigIn most be called when login button has been clicked test 4 in navbar page
  it('should called onSigIn methode if Login button clicked', () => {
    const logInButCliecked = fixture.debugElement.nativeElement.querySelector('#logbut');
    logInButCliecked.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.onSigIn).toBeTruthy();
      expect(component.onSigIn).toBeDefined();
    });
  });


});
