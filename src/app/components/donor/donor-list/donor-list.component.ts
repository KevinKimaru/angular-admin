import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { DonorService } from '../../../services/donor.service';
import { Donor } from '../../../model/donor.model';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.css']
})
export class DonorListComponent implements OnInit {

  dataTable: any;

  constructor(public donorService: DonorService, private toastr: ToastrService, 
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.donorService.getDonors(this.cdr, this.dataTable);
  }

  showForEdit(donor: Donor) {
    this.donorService.selectedDonor = Object.assign({}, donor);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.donorService.deleteDonor(id)
        .subscribe(x => {
          this.donorService.getDonors();
          this.toastr.warning('Successfully deleted record', 'Donors');
        });
    }
  }

}
