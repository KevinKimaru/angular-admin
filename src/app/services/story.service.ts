import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Story } from '../model/story.model';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Organisation } from '../model/organisation.model';
import { Donation } from '../model/donation.model';
import { constants } from '../constants';

import * as $ from 'jquery';


@Injectable()
export class StoryService {

  selectedStory: Story;
  storyList: Story[];
  selectedStoryOrganisationId: number;
  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', constants.base_uri + 'image/' + this.selectedStory.id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req); 
  }

  // getFiles(): Observable<string[]> {
  getFiles(): Observable<any> {
    return this.http.get(constants.base_uri + 'getImages/' + this.selectedStory.id);
  }

  postStory(story: Story) {
    return this.http.post(constants.base_uri + 'stories', story);
  }

  putStory(id, story: Story) {
    return this.http.put(constants.base_uri + 'stories/' + id, story);
  }

  getStories(cdr?: ChangeDetectorRef, dataTable?: any) {
    this.http.get(constants.base_uri + 'stories')
      .toPromise().then((x: any) => {
        this.storyList = x._embedded.stories;
        for (const story of this.storyList) {
          this.http.get(constants.base_uri + 'stories/' + story.id + '/organisation')
            .toPromise().then((x: any) => {
              story.organisation = x;
            }, err => {
              story.organisation = new Organisation();
            });
          this.http.get(constants.base_uri + 'stories/' + story.id + '/donations')
            .toPromise().then((x: any) => {
              story.donations = x._embedded.donations;
            }, err => {
              story.donations = new Array<Donation>();
            });
        }
        if (cdr != null) {
          cdr.detectChanges();
          const table: any = $('#table'); 
          dataTable = table.DataTable();
        }
      })
  }

  deleteStory(id: number) {
    return this.http.delete(constants.base_uri + 'deleteStory/' + id);
  }

  deleteImage(id: number, imageName: string) : Observable<any>{
    return this.http.put(constants.base_uri + `deleteImage/${id}/${imageName}/`, id);
  }
}
