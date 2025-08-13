import { TestBed } from '@angular/core/testing';

import { SharedIonicModuleService } from './shared-ionic-module.service';

describe('SharedIonicModuleService', () => {
  let service: SharedIonicModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedIonicModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
