import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { toast } from 'ngx-sonner';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const userRole = localStorage.getItem('userRole');
    const requiredRole = route.data['role']; // Assuming role is stored in local storage

    if (typeof localStorage === 'undefined') {
      toast.error('Please login or register to access the site.');
      this.router.navigate(['/']);
      return false;
    }

    if(requiredRole === "admin" && userRole === "admin"){
      return true;
    }

    if((requiredRole === "user" && userRole === "user") || (requiredRole === "user" && userRole === "admin")){
      return true;
    }

    if (userRole !== requiredRole) {
      toast.error('You do not have permission to access this page.');
      this.router.navigate(['/']);
      return false;
    }

    this.router.navigate(['/']);
    return false;
  }
}
