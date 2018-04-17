import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CstoryComponent } from './cstory.component';

describe('CstoryComponent', () => {
  let component: CstoryComponent;
  let fixture: ComponentFixture<CstoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CstoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
