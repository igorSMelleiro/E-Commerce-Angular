import { TestBed } from '@angular/core/testing';

import { CompleteProdRequestService } from './complete-prod-request.service';

describe('CompleteProdRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompleteProdRequestService = TestBed.get(CompleteProdRequestService);
    expect(service).toBeTruthy();
  });
});
