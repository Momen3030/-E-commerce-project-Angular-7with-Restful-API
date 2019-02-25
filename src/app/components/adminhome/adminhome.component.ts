import { Component, OnInit } from '@angular/core';
import {ProuductData} from '../../interfaces/prouduct-data';
import {ProudctService} from '../../services/proudct.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

    prods: ProuductData[];
    constructor(private _ProudctService: ProudctService, private router: Router, private auth: AuthService,private location: Location) {
    }

    ngOnInit() {
        this._ProudctService.apiData.subscribe(
            (products) => { this.prods = products.data;
                console.log(this.prods); });
    }

    productDetails(pid: string) {
        this.router.navigate(['/product', pid ]);
    }
    addNewProduct() {
        this.router.navigate(['/addnewproduct']);
    }
    delete(pidOfCart: any) {
        this._ProudctService.deleteProductByID(pidOfCart).subscribe(res => {console.log(res)});
        location.reload();
    }

}
