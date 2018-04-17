import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsCompanyListComponent } from './points-company-list.component';

describe('PointsCompanyListComponent', () => {
  let component: PointsCompanyListComponent;
  let fixture: ComponentFixture<PointsCompanyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsCompanyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
