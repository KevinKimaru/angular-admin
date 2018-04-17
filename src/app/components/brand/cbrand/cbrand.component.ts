import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { BrandService } from '../../../services/brand.service';

@Component({
  selector: 'app-cbrand',
  templateUrl: './cbrand.component.html',
  styleUrls: ['./cbrand.component.css']
})
export class CbrandComponent implements OnInit {

  constructor(public brandService:BrandService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.brandService.selectedBrand = {
      id: null,
      name: '',
      fundings: null,
      donations: null,
      dateAdded: null
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      this.brandService.postBrand(form.value).subscribe(data => {
        this.resetForm(form);
        this.brandService.getBrands();
        this.toastr.success('New record succefully added', 'Brands');
      }, (err:HttpErrorResponse) => {
        this.toastr.error(err.error.message, 'Error');
      });
    } else {
      this.brandService.putBrand(form.value.id, form.value).subscribe(data => {
        this.resetForm(form);
        this.brandService.getBrands();
        this.toastr.success('Record succefully updated', 'Brands');
      }, (err:HttpErrorResponse) => {
        this.toastr.error(err.error.message, 'Error');
      });
    }
  }


}
