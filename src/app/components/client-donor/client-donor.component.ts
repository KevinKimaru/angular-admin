import { Component, OnInit } from '@angular/core';
import { DonorService } from '../../services/donor.service';

@Component({
  selector: 'app-client-donor',
  templateUrl: './client-donor.component.html',
  styleUrls: ['./client-donor.component.css']
})
export class ClientDonorComponent implements OnInit {

  constructor(public donorService: DonorService) { }

  ngOnInit() {
  }

}
