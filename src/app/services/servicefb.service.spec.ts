import { TestBed } from '@angular/core/testing';

import { ServicefbService } from './servicefb.service';
import {Router} from "@angular/router";

describe('ServicefbService', () => {
  beforeEach(
    () =>
      TestBed.configureTestingModule({
        providers:[Router],
      })
  );

  it('should be created', () => {
    const service: ServicefbService = TestBed.get(ServicefbService);
    expect(service).toBeTruthy();
  });
});
