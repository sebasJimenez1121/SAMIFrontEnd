import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Doctor } from '../models/doctor.model'; // Asegúrate de tener esta importación


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'http://localhost:8000'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getSpecialties(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/specialties`);
  }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiUrl}/doctors`);
  }

  loadTopRankedDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiUrl}/doctors`).pipe(
      map(doctors => doctors.sort((a, b) => b.rating - a.rating)), // Ordena los médicos por su rating de forma descendente
      map(sortedDoctors => sortedDoctors.slice(0, 3)) // Selecciona los tres primeros médicos
    );
  }
}
