import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDonorUpdateComponent } from './client-donor-update.component';

describe('ClientDonorUpdateComponent', () => {
  let component: ClientDonorUpdateComponent;
  let fixture: ComponentFixture<ClientDonorUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDonorUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDonorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
