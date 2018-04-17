import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsCompanyComponent } from './points-company.component';

describe('PointsCompanyComponent', () => {
  let component: PointsCompanyComponent;
  let fixture: ComponentFixture<PointsCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
