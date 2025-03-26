import { Component } from '@angular/core';
import { FindJobCardComponent } from "../find-job-card/find-job-card.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-job-portals',
  imports: [FindJobCardComponent,RouterModule],
  templateUrl: './list-job-portals.component.html',
  styleUrl: './list-job-portals.component.css'
})
export class ListJobPortalsComponent {

  constructor(public router: Router) {
    console.log(router.url);

  }

}
