import { TestBed } from '@angular/core/testing';

import { TimerUtilsService } from './timer-utils.service';

describe('TimerUtilsService', () => {
  let service: TimerUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
