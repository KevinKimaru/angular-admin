import { Component, OnInit } from '@angular/core';
import { DonorService } from '../../../services/donor.service';

@Component({
  selector: 'app-donor-details',
  templateUrl: './donor-details.component.html',
  styleUrls: ['./donor-details.component.css']
})
export class DonorDetailsComponent implements OnInit {

  constructor(private donorService: DonorService) { }

  ngOnInit() {
  }

}
