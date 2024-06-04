import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Medico {
  medico: string;
  imagenMedico: string;
  especialidad: string;
  paciente: string;
  estado: string;
  fechaAgendamiento: string;
}

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private apiUrl = 'http://localhost:3000/citas';

  constructor(private http: HttpClient) { }

  getCitasByUsuario(usuarioId: string): Observable<Medico[]> {
    const url = `${this.apiUrl}?usuarioId=${usuarioId}`;
    return this.http.get<Medico[]>(url);
  }
}
