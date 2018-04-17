import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDonorDonateComponent } from './client-donor-donate.component';

describe('ClientDonorDonateComponent', () => {
  let component: ClientDonorDonateComponent;
  let fixture: ComponentFixture<ClientDonorDonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDonorDonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDonorDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
