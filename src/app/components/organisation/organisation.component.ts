import { Component, OnInit } from '@angular/core';
import { OrganisationService } from '../../services/organisation.service';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent implements OnInit {

  constructor(public organisationService: OrganisationService) { }

  ngOnInit() {
  }

}
