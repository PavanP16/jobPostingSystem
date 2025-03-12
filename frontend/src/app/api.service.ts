import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  listCandidates() {
    return this.http.get(`${this.apiUrl}/candidates`);
  }

  registerCandidate(candidate: any) {
    return this.http.post(`${this.apiUrl}/candidates`, candidate);
  }

  createJobPortal(jobPortal: any) {
    return this.http.post(`${this.apiUrl}/job-portals`, jobPortal);
  }

  listJobPortals() {
    return this.http.get(`${this.apiUrl}/job-portals`);
  }
}
