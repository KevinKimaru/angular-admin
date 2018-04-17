import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { PointsCompany } from '../model/points-company.model';
import { Donation } from '../model/donation.model';
import { constants } from '../constants';
import { HttpClient } from '@angular/common/http';

import * as $ from 'jquery';


@Injectable()
export class PointsCompanyService {

  selectedPointsCompany: PointsCompany;
  pointsCompanyList: PointsCompany[];
  constructor(private http: HttpClient) { }

  postPointsCompany(pointsCompany: PointsCompany) {
    return this.http.post(constants.base_uri + 'pointsCompanies', pointsCompany);
  }

  putPointsCompany(id, pointsCompany: PointsCompany) {
    return this.http.put(constants.base_uri + 'pointsCompanies/' + id, pointsCompany);
  }

  getPointsCompanies(cdr?: ChangeDetectorRef, dataTable?: any) {
    this.http.get(constants.base_uri + 'pointsCompanies')
      .toPromise().then((x:any) => {
        this.pointsCompanyList = x._embedded.pointsCompanies;
        for (const pointsCompany of this.pointsCompanyList) {
          this.http.get(constants.base_uri + 'pointsCompanies/' + pointsCompany.id + '/donations')
           .toPromise().then((x:any) => {
              pointsCompany.donations = x._embedded.donations;
            }, err => {
              pointsCompany.donations = new Array<Donation>();
            });
        }
        if (cdr != null) {
          cdr.detectChanges();
          const table: any = $('#table'); 
          dataTable = table.DataTable();
        }
      })
  }

  deletePointsCompany(id: number) {
    return this.http.delete(constants.base_uri + 'pointsCompanies/' + id);
  }
}
