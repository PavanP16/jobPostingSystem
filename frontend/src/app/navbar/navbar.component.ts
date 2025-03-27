import { Component } from '@angular/core';
import { toast } from 'ngx-sonner';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  protected readonly toast = toast;
 

}
