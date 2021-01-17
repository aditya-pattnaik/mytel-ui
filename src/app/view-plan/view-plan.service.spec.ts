import { TestBed, inject } from '@angular/core/testing';

import { ViewPlanService } from './view-plan.service';

describe('ViewPlanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewPlanService]
    });
  });

  it('should be created', inject([ViewPlanService], (service: ViewPlanService) => {
    expect(service).toBeTruthy();
  }));
});
