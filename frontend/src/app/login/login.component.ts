import { Component } from '@angular/core';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  protected readonly toast = toast;
}
