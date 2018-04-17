import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { FundingService } from '../../../services/funding.service';
import { Funding } from '../../../model/funding.model';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-funding-list',
  templateUrl: './funding-list.component.html',
  styleUrls: ['./funding-list.component.css']
})
export class FundingListComponent implements OnInit {

  dataTable: any;

  constructor(public fundingService: FundingService, private toastr: ToastrService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.fundingService.getFundings(this.cdr, this.dataTable);
  }

  showForEdit(funding: Funding) {
    this.fundingService.selectedFunding = Object.assign({}, funding);
    this.fundingService.selectedFundingBrandId = this.fundingService.selectedFunding.brand.id;
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.fundingService.deleteFunding(id)
        .subscribe(x => {
          this.fundingService.getFundings();
          this.toastr.warning('Successfully deleted record', 'Fundings');
        });
    }
  }

}
