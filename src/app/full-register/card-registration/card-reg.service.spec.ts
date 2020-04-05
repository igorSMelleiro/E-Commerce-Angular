import { TestBed } from '@angular/core/testing';

import { CardRegService } from './card-reg.service';

describe('CardRegService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardRegService = TestBed.get(CardRegService);
    expect(service).toBeTruthy();
  });
});
