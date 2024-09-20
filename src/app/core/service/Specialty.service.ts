

  import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Specialty } from '../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {
    private apiUrl = 'http://localhost:10101';  

  constructor(private http: HttpClient) {}

  getSpecialties(): Observable<Specialty[]> {
    return this.http.get<{ specialty: Specialty[] }>(`${this.apiUrl}/specialty/all`)
      .pipe(
        map(response => response.specialty)
      );
  }

  addSpecialty(specialty: Specialty): Observable<Specialty> {
    return this.http.post<Specialty>(`${this.apiUrl}/specialty/create`, specialty);
  }
  activateSpecialty(CodigoEspc: string): Observable<Specialty> {
    return this.http.put<Specialty>(`${this.apiUrl}/specialty/activate/${CodigoEspc}`, {});
  }
  
}

  