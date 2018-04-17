import { Component, OnInit } from '@angular/core';
import { PointsCompanyService } from '../../../services/points-company.service';

@Component({
  selector: 'app-points-company-details',
  templateUrl: './points-company-details.component.html',
  styleUrls: ['./points-company-details.component.css']
})
export class PointsCompanyDetailsComponent implements OnInit {

  constructor(public pointsCompanyService: PointsCompanyService) { }

  ngOnInit() {
  }

}
