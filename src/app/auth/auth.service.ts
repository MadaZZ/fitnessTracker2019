import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();
  authType = new Subject<string>();
  private user: User;
  private loginType: string;
  private adminCred: AuthData = {
    email: 'admin@training.com',
    password: 'password'
  };

  constructor( private router: Router ) {}

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 100000).toString()
    };
    this.authSuccessfuly();
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 100000).toString()
    };
    if (this.user.email === this.adminCred.email && authData.password === this.adminCred.password) {
      this.adminAuthSuccessful();
    }
    else {
      this.authSuccessfuly();
    }
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return {...this.user};
  }

  isAuth() {
    return this.user != null;
  }

  authSuccessfuly() {
    this.authChange.next(true);
    this.authType.next('user');
    this.router.navigate(['/training']);
  }

  adminAuthSuccessful() {
    this.authChange.next(true);
    this.authType.next('admin');
    this.router.navigate(['/admin']);
  }
}
