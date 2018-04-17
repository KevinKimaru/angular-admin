import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { DonorService } from '../../services/donor.service';

@Component({
  selector: 'app-add-client-donor',
  templateUrl: './add-client-donor.component.html',
  styleUrls: ['./add-client-donor.component.css']
})
export class AddClientDonorComponent implements OnInit {

  constructor(public donorService: DonorService, private toastr: ToastrService) { }

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
    this.donorService.postDonor(form.value).subscribe(data => {
      this.resetForm(form);
      this.donorService.getDonors();
      this.toastr.success('New record succefully added', 'Donors');
    }, err => {
      if(err.error.message) {
        this.toastr.success('Error', err.error.message);
      }
    });
  }

}



