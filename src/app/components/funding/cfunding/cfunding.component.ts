import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { FundingService } from '../../../services/funding.service';
import { BrandService } from '../../../services/brand.service';

@Component({
  selector: 'app-cfunding',
  templateUrl: './cfunding.component.html',
  styleUrls: ['./cfunding.component.css']
})
export class CfundingComponent implements OnInit {

  constructor(public fundingService: FundingService,
     public brandService: BrandService, private toastr: ToastrService) { }

  ngOnInit() {
    this.brandService.getBrands();
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.fundingService.selectedFunding = {
      id: null,
      brand: null,
      placedAmount: null,
      currentAmount: null,
      dateAdded: null,
      status: null,
      ratio: null
    };
    this.fundingService.selectedFundingBrandId = null;
  }

  onSubmit(form: NgForm) {
    form.value.brand = '/brand/' + form.value.brand;
    if (form.value.id == null) {
      this.fundingService.postFunding(form.value).subscribe(data => {
        this.resetForm(form);
        this.fundingService.getFundings();
        this.toastr.success('New record succefully added', 'Fundings');
      });
    } else {
      this.fundingService.putFunding(form.value.id, form.value).subscribe(data => {
        this.resetForm(form);
        this.fundingService.getFundings();
        this.toastr.success('Record succefully updated', 'Fundings');
      });
    }
  }

}
