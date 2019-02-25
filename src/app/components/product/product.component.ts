import { Component, OnInit } from '@angular/core';
import {ProudctService} from '../../services/proudct.service';
import {ProuductData} from '../../interfaces/prouduct-data';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    prods: ProuductData[];
  constructor(private _ProudctService: ProudctService, private router: Router, private auth: AuthService ) {
  }

  ngOnInit() {
      this._ProudctService.apiData.subscribe(
          (products) => { this.prods = products.data;
          console.log(this.prods); });


      // this._ProudctService.cartOfIdSProudcts = this.cartOfIdProudcts;
  }



    productDetails(pid: string) {
        this.router.navigate(['/product', pid ]);
  }
    addNewProduct() {
        this.router.navigate(['/addnewproduct']);
    }
    // addCart(pidOfCart: string) {
    //    this.cartOfIdProudcts[ this.counterOfPid] = pidOfCart;
    //    this.counterOfPid = this.counterOfPid + 1;
    //    console.log(this.counterOfPid);
    // }
    addCart(pidOfCart: any) {
        this._ProudctService.addToCart(pidOfCart);
    }
}
