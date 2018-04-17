import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { StoryService } from '../../../services/story.service';
import { Story } from '../../../model/story.model';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {

  dataTable: any;

  constructor(public storyService: StoryService, private toastr: ToastrService, 
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.storyService.getStories(this.cdr, this.dataTable);
  }

  showForEdit(story: Story) {
    this.storyService.selectedStory = Object.assign({}, story);
    this.storyService.selectedStoryOrganisationId = this.storyService.selectedStory.organisation.id;
    this.storyService.getFiles();
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.storyService.deleteStory(id)
        .subscribe(x => {
          this.storyService.getStories();
          this.toastr.warning('Successfully deleted record', 'Stories');
        });
    }
  }


}
