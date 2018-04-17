import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorganisationComponent } from './corganisation.component';

describe('CorganisationComponent', () => {
  let component: CorganisationComponent;
  let fixture: ComponentFixture<CorganisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorganisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
