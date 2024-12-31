import { TestBed } from '@angular/core/testing';

import { NumberSelectorService } from './number-selector.service';

describe('NumberSelectorService', () => {
  let service: NumberSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
