// src/app/core/service/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8000'; 

  constructor(private http: HttpClient) { }

  getCitas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/citas`);
  }

  guardarFechaSeleccionada(fecha: string, id: number): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/citas/${id}`, { fecha });
  }
}
