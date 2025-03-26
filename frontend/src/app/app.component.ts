import { Component } from '@angular/core';
import { RouterOutlet , Router, RouterModule} from '@angular/router';
import { toast, NgxSonnerToaster } from 'ngx-sonner';
import { NavbarComponent } from "./navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxSonnerToaster, NavbarComponent,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  standalone:true,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showNavbar = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event.constructor.name === 'NavigationEnd') {
        if (this.router.url !== '/') {
          this.showNavbar = true;
        } else {
          this.showNavbar = false;
        }
      }
    });
  }
  title = 'first-angular-project';
  protected readonly toast = toast;

}
