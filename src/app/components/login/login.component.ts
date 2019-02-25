import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {Usersdata} from '../../interfaces/usersdata';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    users: Usersdata[];
      form;
      constructor(private fb: FormBuilder,
          private myRoute: Router, private _UserService: UserService,
    private auth: AuthService) {
          this.form = fb.group({
              email: ['', [Validators.required, Validators.email]],
              password: ['', Validators.required]
          });
      }

    ngOnInit() {
        this._UserService.apiData.subscribe(
            (users) => { this.users = users.data;
                console.log(this.users); });

    }
    login() {
        if (this.form.valid) {
            for (let i = 0; i < this.users.length; i++) {
                if ( this.users[0].email === this.form.value.email && this.users[0].isAdmin === 1 && this.users[0].userpass === this.form.value.password ) {
                    this.auth.sendToken(this.form.value.email);
                    this.myRoute.navigate(['adminhome']);
                } else if (this.users[i + 1 ].email === this.form.value.email && this.users[i + 1].isAdmin === 0 && this.users[i + 1].userpass === this.form.value.password){
                    this.auth.sendToken(this.form.value.email);
                    this.myRoute.navigate(['cartproducts']);
                } else {
                    this.myRoute.navigate(['home']);
                }
            }
        }
    }
}
