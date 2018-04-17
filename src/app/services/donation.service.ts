import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Donation } from '../model/donation.model';
import { Story } from '../model/story.model';
import { Donor } from '../model/donor.model';
import { PointsCompany } from '../model/points-company.model';
import { Brand } from '../model/brand.model';
import { Transaction } from '../model/transaction.model';
import { ToastrService } from 'ngx-toastr';
import { constants } from '../constants';
import { HttpClient, HttpResponse } from '@angular/common/http';

import * as $ from 'jquery';


@Injectable()
export class DonationService {

  selectedDonation: Donation;
  donationList: Donation[];
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  postDonation(donation: Donation) {
    // return this.http.post(constants.base_uri + 'donations', donation);
    return this.http.post(constants.base_uri + '/donate', donation);
  }

  putDonation(id, donation: Donation) {
    return this.http.put(constants.base_uri + 'donations/' + id, donation);
  }

  getDonations(cdr?: ChangeDetectorRef, dataTable?: any, donorId?: number) {
    if (donorId) {
      this.http.get(constants.base_uri + 'donations/search/findByDonor')
        .toPromise().then((x: any) => {
          if (cdr)
            this.getDonationsData(x, cdr, dataTable);
          this.getDonationsData(x);
        }); 
    } else {
      this.http.get(constants.base_uri + 'donations')
        .toPromise().then((x: any) => {
          if (cdr)
            this.getDonationsData(x, cdr, dataTable);
          this.getDonationsData(x);
        });
    }

  }

  private getDonationsData(x: any, cdr?: ChangeDetectorRef, dataTable?: any) {
    this.donationList = x._embedded.donations;
    for (const donation of this.donationList) {
      this.http.get(constants.base_uri + 'donations/' + donation.id + '/story')
        .toPromise().then((x: any) => {
          donation.story = x;
          this.http.get(constants.base_uri + 'stories/' + x.id + '/organisation')
            .toPromise().then((y: any) => {
              donation.story.organisation = y;
            });
        }, err => {
          donation.story = new Story();
        });
      this.http.get(constants.base_uri + 'donations/' + donation.id + '/donor')
        .toPromise().then((x: any) => {
          donation.donor = x;
        }, err => {
          donation.donor = new Donor();
        });
      this.http.get(constants.base_uri + 'donations/' + donation.id + '/pointsCompany')
        .toPromise().then((x: any) => {
          donation.pointsCompany = x;
        }, err => {
          donation.pointsCompany = new PointsCompany();
        });
      this.http.get(constants.base_uri + 'donations/' + donation.id + '/matchedBrands')
        .toPromise().then((x: any) => {
          donation.matchedBrands = x._embedded.brands;
        }, err => {
          donation.matchedBrands = new Array<Brand>();
        });
      this.http.get(constants.base_uri + 'donations/' + donation.id + '/transactions')
        .toPromise().then((x: any) => {
          donation.transactions = x._embedded.transactions;
        }, err => {
          donation.transactions = new Array<Transaction>();
        });
    }
    if (cdr != null) {
      cdr.detectChanges();
      const table: any = $('#table');
      dataTable = table.DataTable();
    }
  }

  deleteDonation(id: number) {
    return this.http.delete(constants.base_uri + 'donations/' + id);
  }

}
