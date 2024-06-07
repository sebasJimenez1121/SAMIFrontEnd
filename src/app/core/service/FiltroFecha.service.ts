// src/app/core/service/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FechaService {
  private apiUrl = 'http://localhost:8000/Fecha';

  constructor(private http: HttpClient) { }

  getCitas(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8000/Citas');
  }

  guardarFechaSeleccionada(fecha: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { fecha });
  }
}
