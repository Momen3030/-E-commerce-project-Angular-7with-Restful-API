import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ProudctService} from '../../services/proudct.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    counterOfProducts: number ;
  constructor(private auth: AuthService, private _proudctService: ProudctService) {

  }

  ngOnInit() {

  }


  getcounter(): number {

      this.counterOfProducts = this._proudctService.cartOfIdSProudcts.length;
      return this.counterOfProducts;
      console.log(`from nav ${this._proudctService.counterOfProducts}`);
  }

}
