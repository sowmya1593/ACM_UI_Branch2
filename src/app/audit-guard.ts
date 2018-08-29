import { Injectable } from '@angular/core';

import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanLoad, Route
} from '@angular/router';
import { UtilService } from './util.service';



@Injectable()
export class WorkflowGuardAudit implements CanActivate {
    constructor(private router: Router, private utilService: UtilService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        //let path: string = route.routeConfig.path;

        if(localStorage.getItem('auditActive'))
        {
            return true;
        }
        else{
            return false;
          
          
        }

    
    }

    
}
