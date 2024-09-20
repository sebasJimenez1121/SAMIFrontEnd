import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of, interval } from 'rxjs'; 
import { switchMap, startWith } from 'rxjs/operators';
import { AppointmentResponse } from '../models/response.model';
import { Appointment, AppointmentCreate, AppointmentUpdate } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private apiUrl = 'http://localhost:10102/cita';
  constructor(private http: HttpClient) {}

  getCitas(): Observable<Appointment[]> {
    return this.http.get<{ citas: Appointment[] }>(`${this.apiUrl}/get`)
      .pipe(
        map(response => response.citas),  
        catchError(this.handleError<Appointment[]>('getCitas', []))
      );
  }
  // Obtener horas ocupadas para una cita específica por día
  getUnavailableHours(fechaCita: string, IdMedico: string) {
    console.log('Fecha de la cita:', fechaCita);  // Verificar que sea correcto
    console.log('ID del médico:', IdMedico);
    return this.http.get<{ horas: string[] }>(`${this.apiUrl}/hour`, {
      params: { fechaCita, IdMedico },
    });
  }

  getCitaById(codigoCita: string): Observable<Appointment>  {
    const url = `${this.apiUrl}/getCita`;
    console.log(codigoCita);
    const params = new HttpParams().set('codigoCita', codigoCita); // Parámetro de consulta
    return this.http.get<Appointment>(url, { params });
}

  guardarFechaSeleccionada(fecha: string, id: number): Observable<Appointment> {
    const update: AppointmentUpdate = {
      fechaCita: fecha,
      estado: 'Agendada'
    };
    return this.http.patch<Appointment>(`${this.apiUrl}/${id}`, update).pipe(
      catchError(this.handleError<Appointment>('guardarFechaSeleccionada'))
    );
  }

  cancelarCita(id: number): Observable<any> {
    const update: AppointmentUpdate = { estado: 'Cancelada' };
    return this.http.patch<any>(`${this.apiUrl}/${id}`, update);
  }

  crearCita(appointment: AppointmentCreate): Observable<AppointmentResponse> {
    return this.http.post<AppointmentResponse>(`${this.apiUrl}/create`, appointment);
  }

  verificarDisponibilidad(fechaHora: string): Observable<boolean> {
    const url = `${this.apiUrl}?fechaCita=${fechaHora}`;
    return this.http.get<Appointment[]>(url).pipe(
      map(citas => citas.length === 0),
      catchError(this.handleError<boolean>('verificarDisponibilidad', false))
    );
  }

  enviarNotificaciones(citaId: number): Observable<any> {
    console.log(`Enviando notificaciones para la cita con ID: ${citaId}`);
    return new Observable<any>(observer => {
      setTimeout(() => {
        observer.next('Notificaciones enviadas correctamente');
        observer.complete();
      }, 2000);
    });
  }

  updateMotivoCita(citaId: string, motivo: string): Observable<any> {
    const url = `${this.apiUrl}/motivo`;
    return this.http.put(url, { citaId, motivo });
  }

  uploadDocument(formData: FormData): Observable<any> {
    const url = `${this.apiUrl}/documentos`;
    return this.http.post(url, formData);
  }
  

  private handleError<T>(operation = 'operación', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} fallida: ${error.message}`);
      return of(result as T);
    };
  }
}