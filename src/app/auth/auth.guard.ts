import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor( private authservice: AuthService, private router: Router ) {}
    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authservice.isAuth()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
