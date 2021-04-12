import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { HardCodedAuthenticationService } from '../Services/hard-coded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {




  constructor(private hardCodedAuthenticationService: HardCodedAuthenticationService) { }



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.hardCodedAuthenticationService.isUserLoggedIn())
      return true;
    else
      return false;

  }




}
