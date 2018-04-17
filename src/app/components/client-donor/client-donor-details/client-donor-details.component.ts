import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DonorService } from '../../../services/donor.service';
import { DonationService } from '../../../services/donation.service';
import { Donation } from '../../../model/donation.model';

@Component({
  selector: 'app-client-donor-details',
  templateUrl: './client-donor-details.component.html',
  styleUrls: ['./client-donor-details.component.css']
})
export class ClientDonorDetailsComponent implements OnInit {

  dataTable: any;

  constructor(private donationService: DonationService, private donorService: DonorService,
     private cdr : ChangeDetectorRef) { }

  ngOnInit() {
    this.donationService.getDonations(this.cdr, this.dataTable, Number.parseInt(localStorage.getItem("user_ID")))
  }

  showForEdit(donation: Donation) {
    this.donationService.selectedDonation = Object.assign({}, donation);
  }

}
