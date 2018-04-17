import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientDonorComponent } from './add-client-donor.component';

describe('AddClientDonorComponent', () => {
  let component: AddClientDonorComponent;
  let fixture: ComponentFixture<AddClientDonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClientDonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
