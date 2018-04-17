import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BrandService } from '../../../services/brand.service';

@Component({
  selector: 'app-brand-relations',
  templateUrl: './brand-relations.component.html',
  styleUrls: ['./brand-relations.component.css']
})
export class BrandRelationsComponent implements OnInit {

  constructor(private brandService: BrandService) { }

  ngOnInit() {
  }

  

}
