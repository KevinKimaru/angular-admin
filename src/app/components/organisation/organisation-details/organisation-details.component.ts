import { Component, OnInit } from '@angular/core';
import { OrganisationService } from '../../../services/organisation.service';

@Component({
  selector: 'app-organisation-details',
  templateUrl: './organisation-details.component.html',
  styleUrls: ['./organisation-details.component.css']
})
export class OrganisationDetailsComponent implements OnInit {

  constructor(private organisationService: OrganisationService) { }

  ngOnInit() {
  }

}
