import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UtilService } from './util.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,private utilservice:UtilService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //if (localStorage.getItem('currentUser')) {
            if(localStorage.getItem('dash')){
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}