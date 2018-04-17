import { TestBed, inject } from '@angular/core/testing';

import { PointsCompanyService } from './points-company.service';

describe('PointsCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PointsCompanyService]
    });
  });

  it('should be created', inject([PointsCompanyService], (service: PointsCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
