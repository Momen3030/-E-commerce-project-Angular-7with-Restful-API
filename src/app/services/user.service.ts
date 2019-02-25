import { Injectable } from '@angular/core';
import {ajax} from 'rxjs/ajax';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
    public apiData = ajax(`${environment.URL}login`)
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
