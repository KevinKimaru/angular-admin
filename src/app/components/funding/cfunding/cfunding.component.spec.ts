import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfundingComponent } from './cfunding.component';

describe('CfundingComponent', () => {
  let component: CfundingComponent;
  let fixture: ComponentFixture<CfundingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfundingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
