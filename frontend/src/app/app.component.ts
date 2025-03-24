import { Component } from '@angular/core';
import { RouterOutlet , Router} from '@angular/router';
import { toast, NgxSonnerToaster } from 'ngx-sonner';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxSonnerToaster, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router) { }
  title = 'first-angular-project';
  protected readonly toast = toast;

  isLoginPage(): boolean {
    return this.router.url === '/';
  }
}
