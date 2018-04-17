import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { OrganisationService } from '../../../services/organisation.service';

@Component({
  selector: 'app-corganisation',
  templateUrl: './corganisation.component.html',
  styleUrls: ['./corganisation.component.css']
})
export class CorganisationComponent implements OnInit {

  constructor(public organisationService: OrganisationService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.organisationService.selectedOrganisation = {
      id: null,
      name: '',
      description: '',
      dateAdded: null,
      stories: null
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      this.organisationService.postOrganisation(form.value).subscribe(data => {
        this.resetForm(form);
        this.organisationService.getOrganisations();
        this.toastr.success('New record succefully added', 'Organisations');
      }, (err:HttpErrorResponse) => {
        this.toastr.error(err.error.message, 'Error');
      });
    } else {
      this.organisationService.putOrganisation(form.value.id, form.value).subscribe(data => {
        this.resetForm(form);
        this.organisationService.getOrganisations();
        this.toastr.success('Record succefully updated', 'Organisations');
      }, (err:HttpErrorResponse) => {
        this.toastr.error(err.error.message, 'Error');
      });
    }
  }

}
