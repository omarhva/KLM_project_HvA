import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHomeGeneralComponent } from './modal-home-general.component';

describe('ModalHomeGeneralComponent', () => {
  let component: ModalHomeGeneralComponent;
  let fixture: ComponentFixture<ModalHomeGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHomeGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHomeGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
