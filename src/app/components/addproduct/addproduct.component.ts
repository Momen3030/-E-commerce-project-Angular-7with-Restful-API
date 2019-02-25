import { Component, OnInit } from '@angular/core';
import {ProudctService} from '../../services/proudct.service';
import {NewProductmodel} from '../../classes/new-productmodel';
import {Router} from '@angular/router';
import { ngfModule, ngf } from 'angular-file';
import {CategroyService} from '../../services/categroy.service';
import {Category} from '../../interfaces/category';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
    newProduct: NewProductmodel;
    cats: Category[];
  constructor(private _CategroyService: CategroyService ,private addproductserv: ProudctService, private router: Router) {
      this.newProduct = new NewProductmodel();

  }
  ngOnInit() {
      this._CategroyService.CatData.subscribe(
          (categroies) => { this.cats = categroies.data;
              console.log(this.cats); });


  }
    SubmitData() {
       console.log(this.newProduct.proudctImage);
        console.log(this.newProduct.cat_id);
        this.addproductserv.addProduct(this.newProduct).subscribe(
            res => {console.log(res);
                this.router.navigate(['/products']); },
            err => {console.log(err); }); }


}
