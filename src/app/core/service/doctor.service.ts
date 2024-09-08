import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Doctor, DoctorPublic } from '../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'http://localhost:10101/doctor'; 
 

  constructor(private http: HttpClient) {}
  // Obtener todos los doctores
  getDoctors(): Observable<DoctorPublic[]> {
    return this.http.get<DoctorPublic[]>(`http://localhost:10101/doctor/catalog`);
  }

  // Obtener un doctor por su ID
  getDoctorById(doctorId: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiUrl}/${doctorId}`);
  }

  // Crear un nuevo doctor
  crearDoctor( formData: FormData): Observable<Doctor> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post<Doctor>(`http://localhost:10101/doctor/register`, formData, {headers});
  }
  updateDoctor(doctor: DoctorPublic): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${doctor.tarjetaProf}`, doctor);
  }
  // Eliminar un doctor existente
  eliminarDoctor(doctorId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${doctorId}`);
  }

  // Cargar los doctores mejor calificados
  loadTopRankedDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiUrl}/`).pipe(
      map(doctors => doctors.sort((a, b) => b.rating - a.rating)), 
      map(sortedDoctors => sortedDoctors.slice(0, 3))
    );
  }


  getDoctorByEmail(token: string): Observable<Doctor> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Doctor>(`${this.apiUrl}/profile`, { headers });
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

