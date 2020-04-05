import { TestBed } from '@angular/core/testing';

import { ProfileDataRequestService } from './profile-data-request.service';

describe('ProfileDataRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileDataRequestService = TestBed.get(ProfileDataRequestService);
    expect(service).toBeTruthy();
  });
});
