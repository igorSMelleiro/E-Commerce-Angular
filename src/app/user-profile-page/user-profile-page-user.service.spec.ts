import { TestBed } from '@angular/core/testing';

import { UserProfilePageUserService } from './user-profile-page-user.service';

describe('UserProfilePageUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserProfilePageUserService = TestBed.get(UserProfilePageUserService);
    expect(service).toBeTruthy();
  });
});
