import { TestBed } from '@angular/core/testing';

import { HardcodedAuthenticatorService } from './hardcoded-authenticator.service';
import { BasicAuthenticatorService } from './Basic-authenticator.service';

describe('HardcodedAuthenticatorService', () => {
  let service: BasicAuthenticatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAuthenticatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
