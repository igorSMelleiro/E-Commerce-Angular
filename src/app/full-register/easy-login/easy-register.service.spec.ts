import { TestBed } from '@angular/core/testing';

import { EasyRegisterService } from './easy-register.service';

describe('EasyRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EasyRegisterService = TestBed.get(EasyRegisterService);
    expect(service).toBeTruthy();
  });
});
