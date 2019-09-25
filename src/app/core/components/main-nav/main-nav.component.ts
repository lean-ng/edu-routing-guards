import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  isUserAuthenticated$ = this.authSvc.isAuthenticated$;

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
  }

  logOut() {
    this.authSvc.logOut();
    return false;
  }
}
