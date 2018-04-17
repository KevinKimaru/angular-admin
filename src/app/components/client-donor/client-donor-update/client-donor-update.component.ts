import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DonorService } from '../../../services/donor.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-client-donor-update',
  templateUrl: './client-donor-update.component.html',
  styleUrls: ['./client-donor-update.component.css']
})
export class ClientDonorUpdateComponent implements OnInit {

  constructor(public donorService: DonorService, private toastr: ToastrService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.donorService.getCurrentDonor(this.cdr);
  }

  onSubmit(form: NgForm) {
    if (form.value.id) {
      this.donorService.putDonor(form.value.id, form.value).subscribe(data => {
        this.donorService.getDonors();
        this.donorService.getCurrentDonor();
        this.toastr.success('Record succefully updated', 'Donors');
      }, (err: HttpErrorResponse) => {
        this.toastr.error(err.error.message, 'Error.');
      });
    } else {
      this.toastr.error('No donor to update', 'Error.');
    }
  }

}
