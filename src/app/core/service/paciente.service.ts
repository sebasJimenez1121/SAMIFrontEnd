import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient.model';

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
  getPatientByEmail(token: string): Observable<Patient> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Patient>(`${this.apiUrl}/profile`, { headers });
  }

  // Obtener un paciente por su ID
  getPatientById(patientId: string): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/patient${patientId}`);
  }

  // Registrar un nuevo paciente
  registrarPatient(patientData: any): Observable<Patient> {
    return this.http.post<Patient>(`http://localhost:10101/patient/register`, patientData);
  }

  // Actualizar un paciente existente
  actualizarPatient(patientId: string, patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.apiUrl}/patient${patientId}`, patient);
  }

  // Eliminar un paciente existente
  eliminarPatient(patientId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/patient/${patientId}`);
  }




  
updatePatient(token: string, patient: Patient): Observable<Patient> {
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.put<Patient>(`${this.apiUrl}/profile`, patient, { headers });
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





