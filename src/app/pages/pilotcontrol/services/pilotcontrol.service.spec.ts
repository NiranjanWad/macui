import { TestBed } from '@angular/core/testing';

import { PilotcontrolService } from './pilotcontrol.service';

describe('PilotcontrolService', () => {
  let service: PilotcontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilotcontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
