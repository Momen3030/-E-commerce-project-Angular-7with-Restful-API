import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ProudctService} from '../../services/proudct.service';
import {ActivatedRoute} from '@angular/router';
import {ProuductData} from '../../interfaces/prouduct-data';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
   proudct: ProuductData;
  constructor(private productserv: ProudctService,
              private activatedRoute: ActivatedRoute
  , private location: Location) { }

  ngOnInit() {
     const Pid: string = this.activatedRoute.snapshot.paramMap.get('pid')
    this.productserv.getProductByID(Pid).subscribe(prdct => {
        this.proudct = prdct.data;
        },
        err => {
        console.log(err);
        } );
  }

    goBack() {
    this.location.back();
    }

}
