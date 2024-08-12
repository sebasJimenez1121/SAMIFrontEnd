import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from '../models/patient.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private apiUrl = 'http://localhost:10101'; // Cambia la URL según tu configuración real del backend

  constructor(private http: HttpClient) {}

  // Obtener todos los pacientes
  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiUrl}/patient/patients`);
  }

  // Registrar un nuevo paciente
  registrarPatient(patientData: any): Observable<Patient> {
    return this.http.post<Patient>(`http://localhost:10101/patient/register`, patientData);
  }

  getPatientById(): Observable<{ patient: Patient }> {
    return this.http.get<{patient: Patient}>(`${this.apiUrl}/patient/profile`);
  }

  // Actualizar el perfil del paciente
  actualizarPatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.apiUrl}/patient/updateProfile`, patient);
  }

  updateProfilePicture(formData: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}/profile/picture`, formData);
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





