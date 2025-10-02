import { TestBed } from '@angular/core/testing';

import { ContagemServiceService } from './contagem-service.service';

describe('ContagemServiceService', () => {
  let service: ContagemServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContagemServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
