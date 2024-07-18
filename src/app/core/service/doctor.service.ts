import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Doctor } from '../models/doctor.model';
import { Specialty } from '../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'http://localhost:8000'; 

  constructor(private http: HttpClient) {}

  // Obtener todas las especialidades
  getSpecialties(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/specialties`);
  }

 
  // Obtener todos los doctores
  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiUrl}/doctors`);
  }

  // Obtener un doctor por su ID
  getDoctorById(doctorId: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiUrl}/doctors/${doctorId}`);
  }

  // Crear un nuevo doctor
  crearDoctor( doctorData: any): Observable<Doctor> {
    return this.http.post<Doctor>(`http://localhost:10101/doctor/register`, doctorData);
  }
 
 

  // Eliminar un doctor existente
  eliminarDoctor(doctorId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/doctors/${doctorId}`);
  }

  // Cargar los doctores mejor calificados
  loadTopRankedDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiUrl}/doctors`).pipe(
      map(doctors => doctors.sort((a, b) => b.rating - a.rating)), 
      map(sortedDoctors => sortedDoctors.slice(0, 3))
    );
  }


  getDoctorByEmail(token: string): Observable<Doctor> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Doctor>(`${this.apiUrl}/profile`, { headers });
  }

  updateDoctor(token: string, doctor: Doctor): Observable<Doctor> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<Doctor>(`${this.apiUrl}/profile`, doctor, { headers });
  }

  updateProfilePicture(token: string, formData: FormData): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.apiUrl}/profile/picture`, formData, { headers });
  }

  disableAccount(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.apiUrl}/profile/disable`, {}, { headers });
  }

  changePassword(token: string, passwords: { oldPassword: string, newPassword: string }): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.apiUrl}/profile/change-password`, passwords, { headers });
  }

  recoverPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/recover-password`, { email });
  }
}

