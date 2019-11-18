import { TestBed, async, inject } from '@angular/core/testing';

import { IsAuthenticateGuardGuard } from './is-authenticate-guard.guard';

describe('IsAuthenticateGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsAuthenticateGuardGuard]
    });
  });

  it('should ...', inject([IsAuthenticateGuardGuard], (guard: IsAuthenticateGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
