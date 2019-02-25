import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {NewProductmodel} from '../classes/new-productmodel';
import {ajax} from 'rxjs/ajax';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProudctService {
   public cartOfIdSProudcts: number[] = [];
    public counterOfProducts = 0;
  constructor(private http: HttpClient) {
      console.log('Data Service Connected...');
  }
    public apiData = ajax(`${environment.URL}products`)
        .pipe(
        map(res => {
            if (!res.response) {
                throw new Error('Value expected!');
            }
            return res.response;
        }),
        catchError(err => of([]))
    );

    addToCart(pid: any ) {
        this.cartOfIdSProudcts.push(pid);
        // console.log(...this.cartOfIdSProudcts);
       this.counterOfProducts += 1;
       console.log(`arrLengthfrom service: ${this.counterOfProducts}`);
    }

    getProductByID(prodID: string) {
        const ApiUrl = `${environment.URL}products/${prodID}`;
        console.log(ApiUrl);
        return this.http.get(ApiUrl);
    }


    addProduct(newPrd: NewProductmodel) {
        const ApiUrl = `${environment.URL}product/store`;
        const httpOptions = {headers: new HttpHeaders({
                'Content-Type': 'application/json', 'Accept': ' */*'
                // ,'Authorization': 'my-auth-token'
            })};

        return this.http.post(ApiUrl, newPrd, httpOptions);
    }


    deleteProductByID(prodID: any) {
        const ApiUrl = `${environment.URL}product/${prodID}`;
        console.log(ApiUrl);
        return this.http.get(ApiUrl);
    }





}
