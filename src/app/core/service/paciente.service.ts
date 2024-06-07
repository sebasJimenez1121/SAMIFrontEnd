import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'http://localhost:8000/patients'; // Cambia la URL según tu configuración real del backend

  constructor(private http: HttpClient) {}

  // Obtener todos los pacientes
  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }

  // Obtener un paciente por su ID
  getPatientById(patientId: string): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/${patientId}`);
  }

  // Crear un nuevo paciente
  crearPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, patient);
  }

  // Actualizar un paciente existente
  actualizarPatient(patientId: string, patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.apiUrl}/${patientId}`, patient);
  }

  // Eliminar un paciente existente
  eliminarPatient(patientId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${patientId}`);
  }
}
