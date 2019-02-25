import { TestBed } from '@angular/core/testing';

import { CategroyService } from './categroy.service';

describe('CategroyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategroyService = TestBed.get(CategroyService);
    expect(service).toBeTruthy();
  });
});
