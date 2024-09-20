// recordatorio.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recordatorio } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class RecordatorioService {

  private apiUrl = 'https://api.tuservicio.com/recordatorios';

  constructor(private http: HttpClient) {}

  // Programar un nuevo recordatorio de medicamento
  programarRecordatorio(recordatorio: Recordatorio): Observable<Recordatorio> {
    return this.http.post<Recordatorio>(`${this.apiUrl}/medicamentos`, recordatorio);
  }
}
