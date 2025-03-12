import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-candidates',
  templateUrl: './list-candidates.component.html',
  styleUrls: ['./list-candidates.component.css'],
})
export class ListCandidatesComponent implements OnInit {
  candidates: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.listCandidates().subscribe((response) => {
      if (Array.isArray(response)) {
        this.candidates = response;
      } else {
        console.error('Expected an array but received:', response);
      }
    });
  }
}
