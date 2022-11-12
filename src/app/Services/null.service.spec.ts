import { TestBed } from '@angular/core/testing';

import { NullService } from './null.service';

describe('NullService', () => {
  let service: NullService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NullService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
