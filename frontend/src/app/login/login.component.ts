import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  protected readonly toast = toast;
  isRegistrationPhase = true; // Set this based on your application logic
  
  email = '';
  password = '';
  username = '';

  constructor(private apiService: ApiService, private router: Router) {
      console.log(router.url);
    }
  
  ngOnInit(): void {
    }
  
  toggleRegistrationPhase() {
      this.isRegistrationPhase = !this.isRegistrationPhase;
  }

  login() {

    if(this.email === "" || this.password === ""){
      toast.warning("Fill all the fields");
      return ;
    }


    this.apiService.login(this.email, this.password).subscribe(
      (response : string) => {
        toast.success("Login Successful")
        this.router.navigate(['/list-job-portals']); // Navigate to home page after login
      },
      (error) => {
        toast.error("Login Failed")
        console.error('Login failed : ', error);
      }
    );
  }

  register() {

    if(this.email === "" || this.username === "" || this.password === ""){
      toast.warning("Fill all the fields");
      return ;
    }


    this.apiService.register(this.username, this.email, this.password).subscribe(
      (response : string) => {
        console.log('Registration successful');
        toast.success('Registered successfully')
        this.router.navigate(['/list-job-portals']);
      },
      (error) => {
        toast.error("Registration Failed")
        console.error('Registration failed : ', error );
      }
    );
  }

  


}
