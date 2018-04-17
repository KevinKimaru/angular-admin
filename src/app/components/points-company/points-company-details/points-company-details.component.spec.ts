import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsCompanyDetailsComponent } from './points-company-details.component';

describe('PointsCompanyDetailsComponent', () => {
  let component: PointsCompanyDetailsComponent;
  let fixture: ComponentFixture<PointsCompanyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsCompanyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsCompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
