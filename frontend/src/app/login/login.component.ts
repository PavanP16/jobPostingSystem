import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    isRegistrationPhase = true; // Set this based on your application logic
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
    // Example method to toggle registration phase
    toggleRegistrationPhase() {
      this.isRegistrationPhase = !this.isRegistrationPhase;
    }
  protected readonly toast = toast;
}
