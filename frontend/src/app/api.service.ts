import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const loginData = { email, password };
    return this.http.post(`${this.apiUrl}/candidates/login`, loginData, {
      responseType: 'text',
    });
  }

  register(name: string, email: string, password: string, skills: string) {
    const registerData = { name, email, password, skills };
    return this.http.post(`${this.apiUrl}/candidates`, registerData, {
      responseType: 'text',
    });
  }

  listCandidates() {
    return this.http.get(`${this.apiUrl}/candidates`);
  }

  registerCandidate(candidate: any) {
    return this.http.post(`${this.apiUrl}/candidates`, candidate);
  }

  createJobPortal(jobPortal: any) {
    return this.http.post(`${this.apiUrl}/jobs`, jobPortal);
  }

  listJobPortals() {
    return this.http.get(`${this.apiUrl}/jobs`);
  }
}
