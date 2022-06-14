import { TestBed } from '@angular/core/testing';

import { MpRoutingService } from './mp-routing.service';

describe('MpRoutingService', () => {
  let service: MpRoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MpRoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
