import { Component } from '@angular/core';
import { FindJobCardComponent } from "../find-job-card/find-job-card.component";
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-job-portals',
  imports: [FindJobCardComponent,RouterModule,CommonModule],
  templateUrl: './list-job-portals.component.html',
  styleUrl: './list-job-portals.component.css'
})
export class ListJobPortalsComponent {

  jobs: any[] = [];
  
    constructor(private apiService: ApiService) { }
  
    ngOnInit(): void {
      this.apiService.listJobPortals().subscribe(response => {
        if (Array.isArray(response)) {
          this.jobs = response;
        } else {
          console.error('Expected an array but received:', response);
        }
      });
    }

}
