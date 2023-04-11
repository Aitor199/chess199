import { TestBed } from '@angular/core/testing';

import { VariablesCompartidasService } from './variables-compartidas.service';

describe('VariablesCompartidasService', () => {
  let service: VariablesCompartidasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariablesCompartidasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
