import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbrandComponent } from './cbrand.component';

describe('CbrandComponent', () => {
  let component: CbrandComponent;
  let fixture: ComponentFixture<CbrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
