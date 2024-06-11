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
  getCitasByUsuario(id: number): Observable<Appointment[]> {
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.get<Appointment[]>(url);
  }

  // Obtener todas las citas
  getCitas(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}`);
  }

   // Obtener detalles de la cita por ID
   getCitaById(id: string): Observable<Appointment> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Appointment>(url);
  }

  // Guardar fecha seleccionada para una cita específica (reagendar cita)
  guardarFechaSeleccionada(fecha: string, id: number): Observable<Appointment> {
    const update: AppointmentUpdate = { fechaCita: fecha };
    return this.http.patch<Appointment>(`${this.apiUrl}/${id}`, update);
  }

  // Cancelar una cita
  cancelarCita(id: number): Observable<any> {
    const update: AppointmentUpdate = { estado: 'Cancelada' }; // Cambiar 'cancelada' a 'Cancelada'
    return this.http.patch<any>(`${this.apiUrl}/${id}`, update);
  }
  // Crear una nueva cita
  crearCita(cita: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.apiUrl, cita);
  }
}
