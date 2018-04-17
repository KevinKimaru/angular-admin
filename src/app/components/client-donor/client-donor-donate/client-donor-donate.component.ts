import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DonorService } from '../../../services/donor.service';
import { StoryService } from '../../../services/story.service';
import { PointsCompanyService } from '../../../services/points-company.service';
import { DonationService } from '../../../services/donation.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-client-donor-donate',
  templateUrl: './client-donor-donate.component.html',
  styleUrls: ['./client-donor-donate.component.css']
})
export class ClientDonorDonateComponent implements OnInit {

  isFormError: boolean = false;

  constructor(public donationService: DonationService,
    public pointsCompanyService: PointsCompanyService,
    public storyService: StoryService,
    public donorService: DonorService,
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
