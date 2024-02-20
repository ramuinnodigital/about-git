import { TestBed } from '@angular/core/testing';

import { RayzerpayService } from './rayzerpay.service';

describe('RayzerpayService', () => {
  let service: RayzerpayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RayzerpayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
