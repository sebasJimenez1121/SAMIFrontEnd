import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private apiUrl = 'http://localhost:10102/pagos'; // URL de tu backend

  constructor(private http: HttpClient) {}

  // Registrar pago en el backend
  registrarPago(pagoData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, pagoData);
  }
}
