import { TestBed } from '@angular/core/testing';

import { SearcherStateService } from './searcher-state.service';

describe('SearcherStateService', () => {
  let service: SearcherStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearcherStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
