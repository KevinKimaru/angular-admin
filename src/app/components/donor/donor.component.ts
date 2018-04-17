import { Component, OnInit } from '@angular/core';
import { DonorService } from '../../services/donor.service';


@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {

  constructor(public donorService: DonorService) { }

  ngOnInit() {
  }

}
