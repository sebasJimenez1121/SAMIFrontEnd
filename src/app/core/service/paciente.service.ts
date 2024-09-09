import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient, updatePatient } from '../models/patient.model';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private apiUrl = 'http://localhost:10101';
  private patientSubject = new BehaviorSubject<Patient | null>(null);
  patient$ = this.patientSubject.asObservable();

  setPatient(patient: Patient) {
    this.patientSubject.next(patient);
  }

  getPatient() {
    return this.patientSubject.asObservable();
  }

  constructor(private http: HttpClient) {} // Inyectar AuthService

  // Obtener todos los pacientes
 
  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiUrl}/patient/patients`);
  }

  // Registrar un nuevo paciente
  registrarPatient(patientData: any): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiUrl}/patient/register`, patientData);
  }

  // Obtener el perfil de un paciente por ID
  getPatientById(): Observable<{ patient: Patient }> {
    return this.http.get<{ patient: Patient }>(`${this.apiUrl}/patient/profile`);
  }

  // Actualizar el perfil del paciente
  actualizarPatient(patient: updatePatient): Observable<Patient> {
    return this.http.put<Patient>(`${this.apiUrl}/patient/updateProfile`, patient);
  }

  // Actualizar foto de perfil
  updateProfilePicture(formData: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}/profile/picture`, formData);
  }

  // Deshabilitar cuenta del paciente
  disableAccount(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.apiUrl}/profile/disable`, {}, { headers });
  }

  // Cambiar la contraseña del paciente
  changePassword(token: string, passwords: { oldPassword: string; newPassword: string }): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.apiUrl}/profile/change-password`, passwords, { headers });
  }

  // Recuperar contraseña
  recoverPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/recover-password`, { email });
  }
}
