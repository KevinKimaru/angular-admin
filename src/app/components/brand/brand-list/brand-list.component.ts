import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { BrandService } from '../../../services/brand.service';
import { Brand } from '../../../model/brand.model';
import { ToastrService } from 'ngx-toastr';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css'] 
})
export class BrandListComponent implements OnInit {

  dataTable: any;

  constructor(private brandService: BrandService, private toastr: ToastrService,
   private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.brandService.getBrands(this.cdr, this.dataTable);
  }

  showForEdit(brand: Brand) {
    this.brandService.selectedBrand = Object.assign({}, brand);
    this.brandService.getBrandFundings(brand.id);
    this.brandService.getBrandDonations(brand.id);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.brandService.deleteBrand(id)
        .subscribe(x => {
          this.brandService.getBrands();
          this.toastr.warning('Successfully deleted record', 'Brands');
        });
    }
  }

}
