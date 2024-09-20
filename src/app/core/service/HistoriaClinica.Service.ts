import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Appointment, AppointmentUpdate } from '../models/appointment.model';
import { Patient } from '../models/patient.model';
import { Recordatorio } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {
  private apiUrl = 'http://localhost:10102';

  constructor(private http: HttpClient) {}

  // Obtener citas para un paciente
  getCitasConDescripcion(pacienteId: string): Observable<Appointment[]> {
    return this.http.get<{ citas: Appointment[] }>(`${this.apiUrl}/cita`, {
      params: { pacienteId }
    }).pipe(
      map(response => response.citas),
      catchError(this.handleError<Appointment[]>('getCitasConDescripcion', []))
    );
  }

  // Obtener detalles de una cita específica
  getCitaById(codigoCita: string): Observable<Appointment>  {
    const url = `${this.apiUrl}/getCita`;
    const params = new HttpParams().set('codigoCita', codigoCita); 
    return this.http.get<Appointment>(url, { params });
  }

  // Obtener información de un paciente
  getPacienteById(pacienteId: string): Observable<Patient> {
    const url = `${this.apiUrl}/patient/profile`;
    return this.http.get<Patient>(url);
  }

  // Actualizar la descripción de una cita
  updateDescripcion(citaId: string, descripcion: string): Observable<any> {
    const url = `${this.apiUrl}/cita/descripcion`;
    return this.http.put(url, { citaId, descripcion });
  }

  // Obtener medicamentos para un paciente
  getMedicamentosByPacienteId(pacienteId: string): Observable<Recordatorio[]> {
    return this.http.get<{ medicamentos: Recordatorio[] }>(`${this.apiUrl}/medicamentos`, {
      params: { pacienteId }
    }).pipe(
      map(response => response.medicamentos),
      catchError(this.handleError<Recordatorio[]>('getMedicamentosByPacienteId', []))
    );
  }

  // Obtener recordatorios de medicamentos para un paciente
  getRecordatoriosByPacienteId(pacienteId: string): Observable<Recordatorio[]> {
    return this.http.get<{ recordatorios: Recordatorio[] }>(`${this.apiUrl}/recordatorios`, {
      params: { pacienteId }
    }).pipe(
      map(response => response.recordatorios),
      catchError(this.handleError<Recordatorio[]>('getRecordatoriosByPacienteId', []))
    );
  }

  // Crear un nuevo recordatorio
  crearRecordatorio(recordatorio: Recordatorio): Observable<Recordatorio> {
    const url = `${this.apiUrl}/recordatorio`;
    return this.http.post<Recordatorio>(url, recordatorio).pipe(
      catchError(this.handleError<Recordatorio>('crearRecordatorio'))
    );
  }

  // Actualizar un recordatorio existente
  actualizarRecordatorio(recordatorio: Recordatorio): Observable<any> {
    const url = `${this.apiUrl}/recordatorio/${recordatorio.codigoRec}`;
    return this.http.put(url, recordatorio).pipe(
      catchError(this.handleError<any>('actualizarRecordatorio'))
    );
  }

  // Eliminar un recordatorio
  eliminarRecordatorio(codigoRec: number): Observable<any> {
    const url = `${this.apiUrl}/recordatorio/${codigoRec}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError<any>('eliminarRecordatorio'))
    );
  }

  // Manejo de errores
  private handleError<T>(operation = 'operación', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} fallida: ${error.message}`);
      return of(result as T);
    };
  }
}
