import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdonationComponent } from './cdonation.component';

describe('CdonationComponent', () => {
  let component: CdonationComponent;
  let fixture: ComponentFixture<CdonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
