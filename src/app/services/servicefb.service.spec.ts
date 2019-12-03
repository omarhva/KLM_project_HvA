import { TestBed } from '@angular/core/testing';

import { ServicefbService } from './servicefb.service';

describe('ServicefbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicefbService = TestBed.get(ServicefbService);
    expect(service).toBeTruthy();
  });
});
