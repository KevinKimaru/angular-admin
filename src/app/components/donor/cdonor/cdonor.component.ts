import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { DonorService } from '../../../services/donor.service';

@Component({
  selector: 'app-cdonor',
  templateUrl: './cdonor.component.html',
  styleUrls: ['./cdonor.component.css']
})
export class CdonorComponent implements OnInit {

  constructor(private donorService: DonorService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.donorService.selectedDonor = {
      id: null,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      dateOfBirth: null,
      gender: null,
      dateAdded: null,
      donations: null,
      username: '',
      password: '',
      role: ''
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      this.donorService.postDonor(form.value).subscribe(data => {
        this.resetForm(form);
        this.donorService.getDonors();
        this.toastr.success('New record succefully added', 'Donors');
      });
    } else {
      this.donorService.putDonor(form.value.id, form.value).subscribe(data => {
        this.resetForm(form);
        this.donorService.getDonors();
        this.toastr.success('Record succefully updated', 'Donors');
      });
    }
  }

}
