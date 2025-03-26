import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const loginData = { email, password };
    return this.http.post(`${this.apiUrl}/candidates/login`, loginData , {responseType : 'text'});
  }

  register(username: string, email: string, password: string) {
    const registerData = { username, email, password };
    return this.http.post(`${this.apiUrl}/candidates`, registerData ,{responseType : 'text'});
  }

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