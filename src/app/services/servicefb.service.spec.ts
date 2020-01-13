import { TestBed } from '@angular/core/testing';

import { ServicefbService } from './servicefb.service';
import {Router} from "@angular/router";

class MockRouter{
  navigate = jasmine.createSpy("navigate");
}

describe('ServicefbService', () => {


  beforeEach(
    () =>
      TestBed.configureTestingModule({
        providers:[{provide:Router,useClass:MockRouter}]
      })
  );

  it('should be created', () => {
    const service: ServicefbService = TestBed.get(ServicefbService);
    expect(service).toBeTruthy();
  });
});
