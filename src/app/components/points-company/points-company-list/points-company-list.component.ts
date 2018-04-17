import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { PointsCompanyService } from '../../../services/points-company.service';
import { PointsCompany } from '../../../model/points-company.model';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-points-company-list',
  templateUrl: './points-company-list.component.html',
  styleUrls: ['./points-company-list.component.css']
})
export class PointsCompanyListComponent implements OnInit {

  dataTable: any;

  constructor(public  pointsCompanyService: PointsCompanyService, private toastr: ToastrService, 
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.pointsCompanyService.getPointsCompanies(this.cdr, this.dataTable);
  }

  showForEdit(pointsCompany: PointsCompany) {
    this.pointsCompanyService.selectedPointsCompany = Object.assign({}, pointsCompany);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.pointsCompanyService.deletePointsCompany(id)
        .subscribe(x => {
          this.pointsCompanyService.getPointsCompanies();
          this.toastr.warning('Successfully deleted record', 'Points Companies');
        });
    }
  }

}
