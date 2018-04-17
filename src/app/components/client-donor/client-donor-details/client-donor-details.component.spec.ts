import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDonorDetailsComponent } from './client-donor-details.component';

describe('ClientDonorDetailsComponent', () => {
  let component: ClientDonorDetailsComponent;
  let fixture: ComponentFixture<ClientDonorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDonorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDonorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
