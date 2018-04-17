import { Component, OnInit, Input } from '@angular/core';
import { StoryService } from '../../../services/story.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.css']
})
export class DetailsUploadComponent implements OnInit {

  @Input() fileUpload: string;

  constructor(public storyService: StoryService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  deleteImg() {
    console.log(this.fileUpload);
    let partsArr = this.fileUpload.split('/');
    let imageName = partsArr[partsArr.length - 1];
    let id: number = Number.parseInt(partsArr[partsArr.length - 2]);
    console.log(id);
    console.log(imageName);
    this.storyService.deleteImage(id, imageName).subscribe(res => {
      this.toastr.warning("Successfully Deleted image", "Delete Image");
    }, (err: HttpErrorResponse) => {
      this.toastr.error("Error deleing image: \n" + err.error.message, "Delete Image");
    });
  }

}
