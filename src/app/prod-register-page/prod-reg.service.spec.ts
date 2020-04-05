import { TestBed } from '@angular/core/testing';

import { ProdRegService } from './prod-reg.service';

describe('ProdRegService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdRegService = TestBed.get(ProdRegService);
    expect(service).toBeTruthy();
  });
});
