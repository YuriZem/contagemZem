import { TestBed } from '@angular/core/testing';

import { ConexaoServiceService } from './conexao-service.service';

describe('ConexaoServiceService', () => {
  let service: ConexaoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexaoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
