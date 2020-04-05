import { TestBed } from '@angular/core/testing';

import { ProdShowcaseDiService } from './prod-showcase-di.service';

describe('ProdShowcaseDiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdShowcaseDiService = TestBed.get(ProdShowcaseDiService);
    expect(service).toBeTruthy();
  });
});
