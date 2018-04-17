import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { DonationService } from '../../../services/donation.service';
import { PointsCompanyService } from '../../../services/points-company.service';
import { StoryService } from '../../../services/story.service';
import { DonorService } from '../../../services/donor.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cdonation',
  templateUrl: './cdonation.component.html',
  styleUrls: ['./cdonation.component.css']
})
export class CdonationComponent implements OnInit {

  isFormError: boolean;

  constructor(private donationService: DonationService,
    private pointsCompanyService: PointsCompanyService,
    private storyService: StoryService,
    private donorService: DonorService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.pointsCompanyService.getPointsCompanies();
    this.storyService.getStories();
    this.donorService.getDonors();
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.donationService.selectedDonation = {
      id: null,
      donor: null,
      story: null,
      amount: null,
      type: null,
      pointsCompany: null,
      dateAdded: null,
      matchedBrands: null,
      transactions: null,
      matchedAmont: null
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.story == undefined || form.value.amount == undefined ||
      form.value.type == undefined) {
      this.isFormError = true;
      return;
    } else {
      this.isFormError = false;
    }
    if (form.value.pointsCompany == undefined && form.value.type == 1) {
      form.value.pointsCompany = -1;
    } else if (form.value.pointsCompany == undefined && form.value.type == 0) {
      this.isFormError = true;
    } else {
      this.isFormError = false;
    }
    this.donationService.postDonation(form.value).subscribe((data: any) => {
      this.resetForm(form);
      this.donationService.getDonations();
      this.toastr.success('New record succefully added', 'Donations');
    }, (err: HttpErrorResponse) => {
      if (err.error.message)
        this.toastr.error('OOps an error occurred.\n ' + err.error.message);
    });
  }

}
