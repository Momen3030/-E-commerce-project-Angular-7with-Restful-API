import { Component, OnInit } from '@angular/core';
import {ProudctService} from '../../services/proudct.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-cartproducts',
  templateUrl: './cartproducts.component.html',
  styleUrls: ['./cartproducts.component.css']
})
export class CartproductsComponent implements OnInit {
    public cartOfIdProudcts: number[];
    // public  productCounter: number;
  constructor(private _proudctService: ProudctService, private auth: AuthService) { }

  ngOnInit() {
    this.cartOfIdProudcts = this._proudctService.cartOfIdSProudcts;
    console.log(this.cartOfIdProudcts);
  }

}
