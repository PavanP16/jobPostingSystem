import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  protected readonly toast = toast;
  isRegistrationPhase = false; // Set this based on your application logic

  email = '';
  password = '';
  name = '';
  skills = '';

  constructor(private apiService: ApiService, private router: Router) {
    console.log(router.url);
  }

  ngOnInit(): void {}

  toggleRegistrationPhase() {
    this.isRegistrationPhase = !this.isRegistrationPhase;
  }

  login() {
    if (this.email === '' || this.password === '') {
      toast.warning('Fill all the fields');
      return;
    }

    this.apiService.login(this.email, this.password).subscribe(
      (response: string) => {
        toast.success('Login Successful');
        if (this.email === 'Admin@gmail.com') {
          localStorage.setItem('userRole', 'admin');
          this.router.navigate(['/create-job-portal']); // Navigate to admin page after login
        } else {
          localStorage.setItem('userRole', 'user');
          this.router.navigate(['/list-job-portals']); // Navigate to home page after login
        }
      },
      (error) => {
        toast.error('Login Failed');
        console.error('Login failed : ', error);
      }
    );
  }

  register() {
    if (
      this.email === '' ||
      this.name === '' ||
      this.password === '' ||
      this.skills === ''
    ) {
      toast.warning('Fill all the fields');
      return;
    }

    console.log(this.email, this.password, this.name);

    this.apiService
      .register(this.name, this.email, this.password, this.skills)
      .subscribe(
        (response: string) => {
          console.log('Registration successful');
          toast.success('Registered successfully');
          localStorage.setItem('userRole', 'user');
          this.router.navigate(['/list-job-portals']);
        },
        (error) => {
          toast.error('Registration Failed');
          console.error('Registration failed : ', error);
        }
      );
  }
}
