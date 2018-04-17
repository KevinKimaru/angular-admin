import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpointsCompanyComponent } from './cpoints-company.component';

describe('CpointsCompanyComponent', () => {
  let component: CpointsCompanyComponent;
  let fixture: ComponentFixture<CpointsCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpointsCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpointsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
