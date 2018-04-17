import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { PointsCompanyService } from '../../../services/points-company.service';

@Component({
  selector: 'app-cpoints-company',
  templateUrl: './cpoints-company.component.html',
  styleUrls: ['./cpoints-company.component.css']
})
export class CpointsCompanyComponent implements OnInit {

  constructor(private pointsCompanyService:PointsCompanyService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.pointsCompanyService.selectedPointsCompany = {
      id: null,
      name: '',
      dateAdded: null,
      donations: null
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      this.pointsCompanyService.postPointsCompany(form.value).subscribe(data => {
        this.resetForm(form);
        this.pointsCompanyService.getPointsCompanies();
        this.toastr.success('New record succefully added', 'Points Companies');
      });
    } else {
      this.pointsCompanyService.putPointsCompany(form.value.id, form.value).subscribe(data => {
        this.resetForm(form);
        this.pointsCompanyService.getPointsCompanies();
        this.toastr.success('Record succefully updated', 'Points Companies');
      });
    }
  }

}
