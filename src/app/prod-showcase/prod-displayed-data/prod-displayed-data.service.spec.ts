import { TestBed } from '@angular/core/testing';

import { ProdDisplayedDataService } from './prod-displayed-data.service';

describe('ProdDisplayedDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdDisplayedDataService = TestBed.get(ProdDisplayedDataService);
    expect(service).toBeTruthy();
  });
});
