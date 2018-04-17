import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import { StoryService } from '../../../services/story.service';

@Component({
  selector: 'app-list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit {

  showFile = false
  fileUploads: Observable<string[]>

  constructor(public storyService: StoryService) { }

  ngOnInit() {
    
  } 

  showFiles(enable: boolean) {
    this.showFile = enable
 
    if (enable) {
      this.fileUploads = this.storyService.getFiles();
    }
  }

}
