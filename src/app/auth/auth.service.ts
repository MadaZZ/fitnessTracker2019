import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AuthData } from './auth-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 100000).toString()
    };
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 100000).toString()
    };
  }

  logout() {
    this.user = null;
  }

  getUser() {
    return {...this.user};
  }

  isAuth() {
    return this.user != null;
  }

  constructor() { }
}
