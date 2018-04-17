import { Component, OnInit } from '@angular/core';
import { PointsCompanyService } from '../../services/points-company.service';

@Component({
  selector: 'app-points-company',
  templateUrl: './points-company.component.html',
  styleUrls: ['./points-company.component.css']
})
export class PointsCompanyComponent implements OnInit {

  constructor(public pointsCompanyService: PointsCompanyService) { }

  ngOnInit() {
  }

}
