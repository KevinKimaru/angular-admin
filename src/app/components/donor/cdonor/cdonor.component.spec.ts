import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdonorComponent } from './cdonor.component';

describe('CdonorComponent', () => {
  let component: CdonorComponent;
  let fixture: ComponentFixture<CdonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
