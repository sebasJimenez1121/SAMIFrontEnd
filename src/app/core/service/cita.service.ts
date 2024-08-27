import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, interval, of } from 'rxjs'; 
import { switchMap, startWith } from 'rxjs/operators';
import { Appointment, AppointmentCreate, AppointmentUpdate } from '../models/appointment.model';

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
    return interval(1000000) // Consulta cada 10 segundos
      .pipe(
        startWith(0), // Empezar inmediatamente al suscribirse
        switchMap(() => this.http.get<Appointment[]>(this.apiUrl))
      );
  }
  // Obtener horas ocupadas para una cita específica por día
  getUnavailableHours(fechaCita: string) {
    return this.http.get<{ horas: string[] }>(`http://localhost:10102/citas/hour`, {
      params: { fechaCita },
    });
  }
  

  // Obtener detalles de la cita por ID
  getCitaById(id: string): Observable<Appointment> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Appointment>(url);
  }

  // Guardar fecha seleccionada para una cita específica (reagendar cita)
  guardarFechaSeleccionada(fecha: string, id: number): Observable<Appointment> {
    const update: AppointmentUpdate = {
      fechaCita: fecha,
      estado: 'Agendada'
    };
  
    return this.http.patch<Appointment>(`${this.apiUrl}/${id}`, update).pipe(
      catchError(this.handleError<Appointment>('guardarFechaSeleccionada'))
    );
  }
  // Cancelar una cita
  cancelarCita(id: number): Observable<any> {
    const update: AppointmentUpdate = { estado: 'Cancelada' };
    return this.http.patch<any>(`${this.apiUrl}/${id}`, update);
  }

  // Crear una nueva cita
  crearCita(cita: AppointmentCreate): Observable<AppointmentCreate> {
    return this.http.post<AppointmentCreate>(`${this.apiUrl}/appointment/create`, cita).pipe(
      catchError(this.handleError<AppointmentCreate>('crearCita'))
    );
}

  // Verificar disponibilidad
  verificarDisponibilidad(fechaHora: string): Observable<boolean> {
    const url = `${this.apiUrl}?fechaCita=${fechaHora}`;
    return this.http.get<Appointment[]>(url).pipe(
      map(citas => citas.length === 0),  
      catchError(this.handleError<boolean>('verificarDisponibilidad', false))
    );
  }

  // Método para enviar notificaciones relacionadas con la cita modificada
  enviarNotificaciones(citaId: number): Observable<any> {
    console.log(`Enviando notificaciones para la cita con ID: ${citaId}`);
    return new Observable<any>(observer => {
      setTimeout(() => {
        observer.next('Notificaciones enviadas correctamente');
        observer.complete();
      }, 2000);
    });
  }

  // Función genérica para manejar errores
  private handleError<T>(operation = 'operación', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} fallida: ${error.message}`);
      return of(result as T);
    };
  }
}
