import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Organisation } from '../model/organisation.model';
import { Story } from '../model/story.model';
import { constants } from '../constants';
import { HttpClient } from '@angular/common/http';

import * as $ from 'jquery';


@Injectable()
export class OrganisationService {

  selectedOrganisation: Organisation;
  organisationList: Organisation[];
  constructor(private http: HttpClient) { }

  postOrganisation(organisation: Organisation) {
    return this.http.post(constants.base_uri + 'organisations', organisation);
  }

  putOrganisation(id, organisation: Organisation) {
    return this.http.put(constants.base_uri + 'organisations/' + id, organisation);
  }

  getOrganisations(cdr?: ChangeDetectorRef, dataTable?: any) {
    this.http.get(constants.base_uri + 'organisations')
     .toPromise().then((x:any) => {
        this.organisationList = x._embedded.organisations;
        for (const organisation of this.organisationList) {
          this.http.get(constants.base_uri + 'organisations/' + organisation.id + '/stories')
           .toPromise().then((x:any) => {
              organisation.stories = x._embedded.stories;
            }, err => {
              organisation.stories = new Array<Story>();
            });
        }
        if (cdr != null) {
          cdr.detectChanges();
          const table: any = $('#table'); 
          dataTable = table.DataTable();
        }
      })
  }

  deleteOrganisation(id: number) {
    return this.http.delete(constants.base_uri + 'organisations/' + id);
  }
}
