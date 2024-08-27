import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor, DoctorPublic } from '../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'http://localhost:10101';

  constructor(private http: HttpClient) {}

  private doctor: DoctorPublic | null = null;

  setDoctor(doctor: DoctorPublic): void {
    this.doctor = doctor;
  }

  getDoctor(): DoctorPublic | null {
    return this.doctor;
  }  // Obtener todos los doctores
  
  getDoctors(): Observable<DoctorPublic[]> {
    return this.http.get<DoctorPublic[]>(`${this.apiUrl}/doctor/catalog`);
  }

  // Obtener un doctor por su ID
  getDoctorById(doctorId: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiUrl}/doctors/${doctorId}`);
  }

  // Crear un nuevo doctor
  crearDoctor(formData: FormData): Observable<Doctor> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post<Doctor>(`${this.apiUrl}/doctor/register`, formData, { headers });
  }

  // Eliminar un doctor existente
  eliminarDoctor(doctorId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/doctors/${doctorId}`);
  }

  // Cargar los doctores mejor calificados

  // Obtener el perfil de un doctor por email
  getDoctorByEmail(token: string): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiUrl}/doctor`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}
