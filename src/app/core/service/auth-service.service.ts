import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRole: string = '';
  private tokenKey: string = 'authToken';

  constructor(private http: HttpClient) {}

  setUserRole(role: string): void {
    this.userRole = role;
  }

  getUserRole(): string {
    return this.userRole;
  }

  isLoggedIn(): boolean {
    return this.userRole !== '';
  }

  isAdmin(): boolean {
    return this.userRole === 'admin';
  }

  isPatient(): boolean {
    return this.userRole === 'paciente';
  }

  fetchUserRole(userId: number): Observable<string> {
    return this.http.get<any>(`http://localhost:8000/users/${userId}`).pipe(
      map(user => {
        this.setUserRole(user.role);
        return user.role;
      })
    );
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post<any>('http://localhost:8000/login', credentials).pipe(
      map(response => {
        if (response.token) {
          localStorage.setItem(this.tokenKey, response.token);
        }
        return response;
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.userRole = '';
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
