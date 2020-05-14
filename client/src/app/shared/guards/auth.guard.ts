// Vendors
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// Services
import { AuthenticationService } from 'app/shared/services';
// Models
import { User } from 'app/shared/models';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {

  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser: User = this.authenticationService.getCurrentUser();

    if (currentUser) {
      // logged in so return true
      if (route.data.roles && route.data.roles.indexOf(currentUser.userRole) === -1) {
        this.router.navigate(['/library']);
        return false;
      }

      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
