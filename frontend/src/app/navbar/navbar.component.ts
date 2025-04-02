import { Component } from '@angular/core';
import { toast } from 'ngx-sonner';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  protected readonly toast = toast;

  constructor(private router: Router) {}

  isAdmin(): boolean {
    return typeof localStorage !== 'undefined' && localStorage.getItem('userRole') === 'admin';
  }

  logout(): void {
    localStorage.removeItem('userRole');
    toast.success("Logged out")
    this.router.navigate(['/']);
  }
}
