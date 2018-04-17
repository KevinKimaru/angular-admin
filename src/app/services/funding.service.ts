import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Funding } from '../model/funding.model';
import { Brand } from '../model/brand.model';
import { constants } from '../constants';
import { HttpClient } from '@angular/common/http';

import * as $ from 'jquery';


@Injectable()
export class FundingService {

  selectedFunding: Funding;
  fundingList: Funding[];
  selectedFundingBrandId: number;
  constructor(private http: HttpClient) { }

  postFunding(funding: Funding) {
    return this.http.post(constants.base_uri + 'fundings', funding);
  }

  putFunding(id, funding: Funding) {
    return this.http.put(constants.base_uri + 'fundings/' + id, funding);
  }

  getFundings(cdr?: ChangeDetectorRef, dataTable?: any) {
    this.http.get(constants.base_uri + 'fundings')
     .toPromise().then((x:any) => {
        this.fundingList = x._embedded.fundings;
        for (const funding of this.fundingList) {
          this.http.get(constants.base_uri + 'fundings/' + funding.id + '/brand')
           .toPromise().then((x:any) => {
              funding.brand = x;
            }, err => {
              funding.brand = new Brand();
            });
        }
        if (cdr != null) {
          cdr.detectChanges();
          const table: any = $('#table'); 
          dataTable = table.DataTable();
        }
      })
  }

  deleteFunding(id: number) {
    return this.http.delete(constants.base_uri + 'fundings/' + id);
  }

}
