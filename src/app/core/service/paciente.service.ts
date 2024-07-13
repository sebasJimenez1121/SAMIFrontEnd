import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Patient[]>(`${this.apiUrl}/patient`);
  }

  // Obtener un paciente por su ID
  getPatientById(patientId: string): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/patient${patientId}`);
  }

  // Registrar un nuevo paciente
  registrarPatient(patientData: any): Observable<Patient> {
    console.log("hola");
    return this.http.post<Patient>(`http://localhost:10101/patient`, patientData);
  }

  // Actualizar un paciente existente
  actualizarPatient(patientId: string, patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.apiUrl}/patient${patientId}`, patient);
  }

  // Eliminar un paciente existente
  eliminarPatient(patientId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/patient/${patientId}`);
  }
}
