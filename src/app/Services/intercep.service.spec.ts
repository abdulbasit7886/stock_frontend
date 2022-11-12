import { TestBed } from '@angular/core/testing';

import { IntercepService } from './intercep.service';

describe('IntercepService', () => {
  let service: IntercepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntercepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
