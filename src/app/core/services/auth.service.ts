import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { MessageService } from './message.service';

@Injectable()
export class AuthService {

  private authSource = new BehaviorSubject(false);
  isAuthenticated$   = this.authSource.asObservable();

  user: User = null;

  constructor(private router: Router, private msgSvc: MessageService) {}

  async logIn(account: string, passwd: string): Promise<boolean> {
    if ( passwd === 's3cr3t' ) {
      this.user = { name: account };
      this.authSource.next(true);
      this.router.navigateByUrl('/');
      this.msgSvc.success(`User (${account}) logged in.`);
      return true;
    } else {
      this.msgSvc.warning(`Account or password wrong.`);
      return false;
    }
  }

  logOut() {
    this.authSource.next(false);
    this.msgSvc.info(`User (${this.user.name}) logged out.`);
    this.user = null;
    this.router.navigateByUrl('/');
  }
}
