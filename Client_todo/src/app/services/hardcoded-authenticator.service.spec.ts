import { TestBed } from '@angular/core/testing';

import { HardcodedAuthenticatorService } from './hardcoded-authenticator.service';

describe('HardcodedAuthenticatorService', () => {
  let service: HardcodedAuthenticatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedAuthenticatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
