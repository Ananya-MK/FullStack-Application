import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticatorService } from './hardcoded-authenticator.service';

@Injectable({
  providedIn: 'root'
})
export class RouterActivatorService implements CanActivate{

  constructor(private loginAuthenticator: HardcodedAuthenticatorService,
    private router: Router
  ) { }
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    if(this.loginAuthenticator.isValidUser())
    return true;

    this.router.navigate(["login"]);
  return false;
  }
}
