import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {
  private apiUrl = 'http://localhost:8000/Fecha';

  constructor(private http: HttpClient) { }

  guardarFechaSeleccionada(fecha: string): Observable<any> {
    // Envía la fecha seleccionada a la API mock
    return this.http.post<any>(this.apiUrl, { fecha });
  }
}