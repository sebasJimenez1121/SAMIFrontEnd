import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private apiUrl = 'http://localhost:10102/pagos'; // Cambia la URL por la de tu backend

  constructor(private http: HttpClient) {}

}
