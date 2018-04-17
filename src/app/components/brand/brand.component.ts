import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(public brandService: BrandService) { }

  ngOnInit() {
  }

}
