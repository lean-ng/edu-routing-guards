import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  account = new FormControl('');
  passwd  = new FormControl('');

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
  }

  logIn() {
    this.authSvc.logIn(this.account.value, this.passwd.value);
  }
}
