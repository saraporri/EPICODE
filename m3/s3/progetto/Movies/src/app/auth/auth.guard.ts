import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,GuardResult, MaybeAsync, RouterStateSnapshot,Router } from '@angular/router';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {

    if(!this.authSvc.syncIsLoggedIn){
      this.router.navigate(['/auth/login'])
    }

    return this.authSvc.syncIsLoggedIn
  }




  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.canActivate(childRoute, state)
  }

}
