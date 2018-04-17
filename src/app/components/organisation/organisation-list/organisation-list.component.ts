import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { OrganisationService } from '../../../services/organisation.service';
import { Organisation } from '../../../model/organisation.model';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-organisation-list',
  templateUrl: './organisation-list.component.html',
  styleUrls: ['./organisation-list.component.css']
})
export class OrganisationListComponent implements OnInit {

  dataTable: any;

  constructor(public organisationService: OrganisationService, private toastr: ToastrService, 
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.organisationService.getOrganisations(this.cdr, this.dataTable);
  }

  showForEdit(organisation: Organisation) {
    this.organisationService.selectedOrganisation = Object.assign({}, organisation);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.organisationService.deleteOrganisation(id)
        .subscribe(x => {
          this.organisationService.getOrganisations();
          this.toastr.warning('Successfully deleted record', 'Organisations');
        });
    }
  }

}
