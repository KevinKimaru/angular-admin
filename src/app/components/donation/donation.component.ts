import { Component, OnInit } from '@angular/core';
import { DonationService } from '../../services/donation.service';


@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  constructor(private donationService: DonationService) { }

  ngOnInit() {
  }

}
