import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor, DoctorPublic } from '../models/doctor.model';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = `${environment.servicioUser}/doctor`; 

  constructor(private http: HttpClient) {}

  private doctor: DoctorPublic | null = null;

  setDoctor(doctor: DoctorPublic): void {
    this.doctor = doctor;
  }

  getDoctor(): DoctorPublic | null {
    return this.doctor;
  }  
  
  getDoctors(): Observable<DoctorPublic[]> {
    return this.http.get<DoctorPublic[]>(`${this.apiUrl}/catalog`);
  }

  // Obtener un doctor por su ID
  getDoctorById(doctorId: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiUrl}/profile`);
  }

  // Crear un nuevo doctor
  crearDoctor(formData: FormData): Observable<Doctor> {
    return this.http.post<Doctor>(`${this.apiUrl}/register`, formData);
  }
  updateDoctor(doctor: DoctorPublic): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${doctor.tarjetaProf}`, doctor);
  }

  // Obtener el perfil de un doctor por email
  getDoctorByEmail(token: string): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiUrl}/profile`);
  }

  updateDocProfile(token: string, doctor: Doctor): Observable<any> {
    const updateDTO = {
      TokenEmail: token,
      documento: doctor.documento,
      nombre: doctor.nombre,
      apellido: doctor.apellido,
      email: doctor.email,
      Foto_Url: doctor.img 
    };
    return this.http.put(`${this.apiUrl}/updateProfile`, updateDTO);
  }
 
  updateProfilePicture(token: string, formData: FormData): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.apiUrl}/profile/picture`, formData, { headers });
  }

  disableAccount(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.apiUrl}/disable`, {}, { headers });
  }

  changePassword(token: string, passwords: { oldPassword: string, newPassword: string }): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.apiUrl}/change-password`, passwords, { headers });
  }
}
