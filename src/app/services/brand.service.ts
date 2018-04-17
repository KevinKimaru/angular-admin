import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';

import { Brand } from '../model/brand.model';
import { Funding } from '../model/funding.model';
import { Donation } from '../model/donation.model';
import { constants } from '../constants';
import { HttpClient } from '@angular/common/http';

import * as $ from 'jquery';

@Injectable()
export class BrandService {

  selectedBrand: Brand;
  brandList: Brand[];
  selectedBrandFundings: Funding[];
  selectedBrandDonations: Donation[];
  constructor(private http: HttpClient) { }

  postBrand(brand: Brand) {
    return this.http.post(constants.base_uri + 'brands', brand);
  }

  putBrand(id, brand: Brand) {
    return this.http.put(constants.base_uri + 'brands/' + id, brand);
  }

  getBrands(cdr?: ChangeDetectorRef, dataTable?: any) {
    return this.http.get(constants.base_uri + 'brands').subscribe((data: any) => {
      this.brandList = data._embedded.brands;
      if (cdr != null) {
        cdr.detectChanges();
        const table: any = $('#table'); 
        dataTable = table.DataTable();
      }
    });
  }

  deleteBrand(id: number) {
    return this.http.delete(constants.base_uri + 'brands/' + id);
  }

  getBrandFundings(brandId: number) {
    this.http.get(constants.base_uri + 'brands/' + brandId + '/fundings')
      .toPromise().then((x: any) => {
        this.selectedBrandFundings = x._embedded.fundings;
      })
  }

  getBrandDonations(brandId: number) {
    this.http.get(constants.base_uri + 'brands/' + brandId + '/donations')
      .toPromise().then((x: any) => {
        this.selectedBrandDonations = x._embedded.donations;
      })
  }

}
