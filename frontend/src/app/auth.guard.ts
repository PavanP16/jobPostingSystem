import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userRole = localStorage.getItem('userRole'); // Assuming role is stored in local storage

    if (route.data && route.data['roles']) {
      if (route.data['roles'].includes(userRole)) {
        return true;
      } else {
        this.router.navigate(['/access-denied']);
        return false;
      }
    }

    return true; // If no roles are specified, allow access
  }
}
