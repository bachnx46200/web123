import { TestBed } from '@angular/core/testing';

import { DaotaoGuardService } from './daotao-guard.service';

describe('DaotaoGuardService', () => {
  let service: DaotaoGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaotaoGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
