import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDonorComponent } from './client-donor.component';

describe('ClientDonorComponent', () => {
  let component: ClientDonorComponent;
  let fixture: ComponentFixture<ClientDonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
