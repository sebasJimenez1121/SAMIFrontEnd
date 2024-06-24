// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRole: string = '';

  constructor(private http: HttpClient) {}

  setUserRole(role: string) {
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
      map(user => user.role)
    );
  }
}
