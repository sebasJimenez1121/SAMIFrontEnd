import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment, AppointmentUpdate } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private apiUrl = 'http://localhost:8000/citas';

  constructor(private http: HttpClient) {}

  // Obtener citas por usuario
  getCitasByUsuario(usuarioId: string): Observable<Appointment[]> {
    const url = `${this.apiUrl}?usuarioId=${usuarioId}`;
    return this.http.get<Appointment[]>(url);
  }

  // Obtener todas las citas
  getCitas(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}`);
  }

  // Guardar fecha seleccionada para una cita específica (reagendar cita)
  guardarFechaSeleccionada(fecha: string, id: number): Observable<Appointment> {
    const update: AppointmentUpdate = { fechaCita: fecha };
    return this.http.patch<Appointment>(`${this.apiUrl}/${id}`, update);
  }

  // Cancelar una cita
  cancelarCita(id: number): Observable<any> {
    const update: AppointmentUpdate = { estado: 'cancelada' };
    return this.http.patch<any>(`${this.apiUrl}/${id}`, update);
  }

  // Crear una nueva cita
  crearCita(cita: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.apiUrl, cita);
  }
}
