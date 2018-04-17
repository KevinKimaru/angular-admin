import { Component, OnInit } from '@angular/core';
import { FundingService } from '../../services/funding.service';

@Component({
  selector: 'app-funding',
  templateUrl: './funding.component.html',
  styleUrls: ['./funding.component.css']
})
export class FundingComponent implements OnInit {

  constructor(private fundingService: FundingService) { }

  ngOnInit() {
  }

}
