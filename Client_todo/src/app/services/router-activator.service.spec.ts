import { TestBed } from '@angular/core/testing';

import { RouterActivatorService } from './router-activator.service';

describe('RouterActivatorService', () => {
  let service: RouterActivatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterActivatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
