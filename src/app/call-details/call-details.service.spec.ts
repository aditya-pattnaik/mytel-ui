import { TestBed, inject } from '@angular/core/testing';

import { CallDetailsService } from './call-details.service';

describe('CallDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CallDetailsService]
    });
  });

  it('should be created', inject([CallDetailsService], (service: CallDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
