import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Experience {
  company: string;
  role: string;
  start: string;
  end: string | null;
  description: string[];
}
export interface Education {
  institution: string;
  course: string;
  start: string;
  end: string;
  description: string[];
}
export interface Profile {
  name: string;
  photo: string;
  birthDate: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
}

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private url = 'http://localhost:3000/profile';
  constructor(private http: HttpClient) {}
  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(this.url);
  }
}