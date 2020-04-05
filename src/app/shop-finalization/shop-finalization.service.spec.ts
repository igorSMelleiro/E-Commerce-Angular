import { TestBed } from '@angular/core/testing';

import { ShopFinalizationService } from './shop-finalization.service';

describe('ShopFinalizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopFinalizationService = TestBed.get(ShopFinalizationService);
    expect(service).toBeTruthy();
  });
});
