import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { DonationService } from '../../../services/donation.service';
import { Donation } from '../../../model/donation.model';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.css']
})
export class DonationListComponent implements OnInit {

  dataTable: any;

  constructor(public donationService: DonationService, private toastr: ToastrService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.donationService.getDonations(this.cdr, this.dataTable);
  }

  showForEdit(donation: Donation) {
    this.donationService.selectedDonation = Object.assign({}, donation);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.donationService.deleteDonation(id)
        .subscribe(x => {
          this.donationService.getDonations();
          this.toastr.warning('Successfully deleted record', 'Donations');
        });
    }
  }

}
