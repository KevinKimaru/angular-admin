import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Donor } from '../model/donor.model';
import { Donation } from '../model/donation.model';
import { constants } from '../constants';
import { HttpClient } from '@angular/common/http';

import * as $ from 'jquery';


@Injectable()
export class DonorService {
 
  selectedDonor: Donor; 
  donorList: Donor[];
  //logged in donor
  currentDonor: Donor; 
  constructor(private http: HttpClient) {

  }

  postDonor(donor: Donor) {
    return this.http.post(constants.base_uri + 'donors', donor);
  }

  putDonor(id, donor: Donor) {
    return this.http.put(constants.base_uri + 'donors/' + id, donor);
  }

  getDonors(cdr?: ChangeDetectorRef, dataTable?: any) {
    this.http.get(constants.base_uri + 'donors')
      .toPromise().then((x: any) => {
        this.donorList = x._embedded.donors;
        for (const donor of this.donorList) {
          this.http.get(constants.base_uri + 'donors/' + donor.id + '/donations')
            .toPromise().then((x: any) => {
              donor.donations = x._embedded.donations;
            }, err => {
              donor.donations = new Array<Donation>();
            });
        }
        if (cdr != null) {
          cdr.detectChanges();
          const table: any = $('#table');
          dataTable = table.DataTable();
        }
      })
  }

  deleteDonor(id: number) {
    return this.http.delete(constants.base_uri + 'users/' + id);
  }

  getCurrentDonor(cdr?: ChangeDetectorRef, dataTable?: any) {
    this.http.get(constants.base_uri + 'donors/' + localStorage.getItem('user_ID'))
      .toPromise().then((x: any) => {
        this.currentDonor = x;
        if (cdr)
          cdr.detectChanges();
      })
  }

}
