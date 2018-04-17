import { Component, OnInit } from '@angular/core';
import { DonationService } from '../../../services/donation.service';

@Component({
  selector: 'app-donation-relations',
  templateUrl: './donation-relations.component.html',
  styleUrls: ['./donation-relations.component.css']
})
export class DonationRelationsComponent implements OnInit {

  constructor(private donationService: DonationService) { }

  ngOnInit() {
  }

}
