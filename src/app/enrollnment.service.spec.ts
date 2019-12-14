import { TestBed } from '@angular/core/testing';

import { EnrollnmentService } from './enrollnment.service';

describe('EnrollnmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnrollnmentService = TestBed.get(EnrollnmentService);
    expect(service).toBeTruthy();
  });
});
