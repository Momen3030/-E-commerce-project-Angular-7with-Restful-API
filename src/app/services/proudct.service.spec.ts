import { TestBed } from '@angular/core/testing';

import { ProudctService } from './proudct.service';

describe('ProudctService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProudctService = TestBed.get(ProudctService);
    expect(service).toBeTruthy();
  });
});
