import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandRelationsComponent } from './brand-relations.component';

describe('BrandRelationsComponent', () => {
  let component: BrandRelationsComponent;
  let fixture: ComponentFixture<BrandRelationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandRelationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
