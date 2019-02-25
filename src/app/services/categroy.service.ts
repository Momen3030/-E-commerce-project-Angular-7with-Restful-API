import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ajax} from 'rxjs/ajax';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategroyService {
    constructor(private http: HttpClient) {
        console.log('Data Service Connected...');
    }
    public CatData = ajax(`${environment.URL}categroies`)
        .pipe(
            map(res => {
                if (!res.response) {
                    throw new Error('Value expected!');
                }
                return res.response;
            }),
            catchError(err => of([]))
        );


}
