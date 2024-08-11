import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userRole: string = '';
  private apiUrl = 'http://localhost:10101';

  constructor(private http: HttpClient, private router: Router) {
    this.loadUserRoleFromToken();
  }

  setUserRole(rol: string) {
    this.userRole = rol;
    localStorage.setItem('userRole', rol);
  }

  getUserRole(): Observable<string> {
    return new Observable<string>(observer => {
      const token = localStorage.getItem('token');
      if (token) {
        const role = this.getUserRoleFromToken(token);
        observer.next(role);
        observer.complete();
      } else {
        observer.error('No token found');
      }
    });
  }

  login(credentials: { document: string; email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, credentials).pipe(
      tap(response => {
        if (response && response.token) {
          console.log(response);
          
          const token = response.token;
          localStorage.setItem('token', token);
          const rol = this.getUserRoleFromToken(token);
          this.setUserRole(rol);
          console.log('Login exitoso. Token:', token);
        } else {
          console.error('Respuesta de login inválida:', response);
          throwError('Respuesta de login inválida');
        }
      }),
      catchError(error => {
        console.error('Error en el login:', error);
        return throwError('Error en el login, por favor intenta nuevamente.');
      })
    );
  }

  getUserRoleFromToken(token: string): string {
    try {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.data.rol;
    } catch (error) {
      console.error("Error decodificando el token:", error);
      return '';
    }
  }

  validateToken(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        if (decodedToken.exp && decodedToken.exp < currentTime) {
          console.warn('Token ha expirado');
          this.clearToken();
          alert('Tu sesión ha expirado. Por favor, inicia sesión nuevamente.');
          return false;
        }
        return true;
      } catch (error) {
        console.error("Error decodificando el token:", error);
        this.clearToken();
        alert('Error con tu sesión. Por favor, inicia sesión nuevamente.');
        return false;
      }
    }
    return false;
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token && this.validateToken();
  }

  isAdmin(): boolean {
    return this.userRole === 'admin';
  }
  
  isPatient(): boolean {
    return this.userRole === 'paciente';
  }
  
  isDoctor(): boolean {
    return this.userRole === 'medico';
  }

  loadUserRoleFromToken() {
    if (this.validateToken()) {
      const token = localStorage.getItem('token');
      if (token) {
        this.setUserRole(this.getUserRoleFromToken(token));
      }
    }
  }

  clearToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    this.userRole = '';
  }

  logout(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.clearToken();
        resolve();
      }); 
    });
  }
}
