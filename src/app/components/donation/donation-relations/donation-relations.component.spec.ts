import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationRelationsComponent } from './donation-relations.component';

describe('DonationRelationsComponent', () => {
  let component: DonationRelationsComponent;
  let fixture: ComponentFixture<DonationRelationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationRelationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
