import { TestBed } from '@angular/core/testing';

import { MedOpsService } from './med-ops.service';

describe('MedOpsService', () => {
  let service: MedOpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedOpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
