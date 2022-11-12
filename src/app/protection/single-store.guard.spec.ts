import { TestBed } from '@angular/core/testing';

import { SingleStoreGuard } from './single-store.guard';

describe('SingleStoreGuard', () => {
  let guard: SingleStoreGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SingleStoreGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
