import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { StoryService } from '../../../services/story.service';
import { OrganisationService } from '../../../services/organisation.service';
import { Organisation } from '../../../model/organisation.model';

@Component({
  selector: 'app-cstory',
  templateUrl: './cstory.component.html',
  styleUrls: ['./cstory.component.css']
})
export class CstoryComponent implements OnInit {

  constructor(private storyService: StoryService, private organisationService: OrganisationService, private toastr: ToastrService) { }

  ngOnInit() {
    this.organisationService.getOrganisations();
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.storyService.selectedStory = {
      id: null,
      description: '',
      organisation: null,
      targetAmount: null,
      timeAllocated: null,
      currentAmount: null,
      donations: null,
      dateAdded: null,
      images: null,
      status: null
    };
    this.storyService.selectedStoryOrganisationId = null;
  }

  onSubmit(form: NgForm) {
    console.log(form.value.organisation);
    form.value.organisation = '/organisation/' + form.value.organisation;
    console.log(form.value.organisation);
    if (form.value.id == null) {
      this.storyService.postStory(form.value).subscribe(data => {
        console.log(data);
        this.resetForm(form);
        this.storyService.getStories();
        this.toastr.success('New record succefully added', 'Stories');
      });
    } else {
      console.log(form.value);
      this.storyService.putStory(form.value.id, form.value).subscribe(data => {
        console.log(data);
        this.resetForm(form);
        this.storyService.getStories();
        this.toastr.success('Record succefully updated', 'Stories');
      });
    }
  }

}
