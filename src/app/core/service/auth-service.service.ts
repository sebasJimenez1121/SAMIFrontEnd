import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userRole: string = '';

  constructor(private http: HttpClient) {
    this.loadUserRoleFromToken();
  }

  setUserRole(role: string) {
    this.userRole = role;
  }

  getUserRole(): string {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken: any = jwt_decode.jwtDecode(token);
        return decodedToken.role;
      } catch (error) {
        console.error("Error decoding token:", error);
        return '';
      }
    }
    return '';
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  isAdmin(): boolean {
    return this.getUserRole() === 'admin';
  }

  isPatient(): boolean {
    return this.getUserRole() === 'patient';
  }

  fetchToken(userId: number): Observable<string> {

    return this.http.get<any>(`http://localhost:8000/users/${userId}`).pipe(
      map(user => user.token),
      tap(token => {
        localStorage.setItem('token', token);
        this.setUserRoleFromToken(token); // Establecer rol de usuario desde el token después de obtenerlo
      })
    );
  }

  private setUserRoleFromToken(token: string) {
    const decodedToken: any = jwt_decode.jwtDecode(token);
    this.setUserRole(decodedToken.role); 
  }

  private loadUserRoleFromToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.setUserRoleFromToken(token); 
    }
  }

  clearToken() {
    localStorage.removeItem('token');
    this.userRole = '';
  }

  logout() {
    this.clearToken(); // Limpiar token y rol de usuario al cerrar sesión
  }
}
