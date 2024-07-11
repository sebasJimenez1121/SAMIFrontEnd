import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, switchMap, catchError, map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode'; // Importación correcta
import { Patient } from '../models/patient.model';
import { Doctor } from '../models/doctor.model';
import { Admin } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userRole: string = '';
  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {
    this.loadUserRoleFromToken();
  }

  setUserRole(role: string) {
    this.userRole = role;
  }

  registerUser(userType: string, userData: any): Observable<any> {
    let registerData = {};

    switch (userType) {
      case 'patient':
        registerData = {
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          documentNumber: userData.documentNumber,
          documentType: userData.documentType,
          phone: userData.phone,
          password: userData.password,
          acceptTerms: userData.acceptTerms
        };
        break;

      case 'doctor':
        registerData = {
          name: userData.name,
          apellido: userData.apellido,
          email: userData.email,
          documentNumber: userData.documentNumber,
          specialtyId: userData.specialtyId,
          appointmentCost: userData.appointmentCost,
          password: userData.password,
          acceptTerms: userData.acceptTerms,
          img: userData.imgFile
        };
        break;

      default:
        throw new Error('Tipo de usuario no válido.');
    }

    return this.http.post<any>(`${this.apiUrl}/${userType}s`, registerData).pipe(
      tap(response => {
        console.log(`Registro exitoso. ID del ${userType}:`, response.id);
      })
    );
  }

  verifyUserExistence(userType: string, credentials: { documentNumber: string }): Observable<boolean> {
    return this.http.get<any>(`${this.apiUrl}/${userType}s/${credentials.documentNumber}`).pipe(
      tap(user => {
        if (user) {
          console.log(`Usuario ${userType} encontrado:`, user);
        } else {
          console.log(`Usuario ${userType} no encontrado`);
        }
      }),
      switchMap(user => user ? [true] : [false])
    );
  }

  login(credentials: { documentNumber: string, password: string }, userType: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userType}s`).pipe(
      tap(users => console.log(`${userType}s from API:`, users)),
      switchMap((users: any[]) => {  // Especificar el tipo de 'users' como un array de cualquier tipo
        const user = users.find(u => u.documentNumber === credentials.documentNumber && u.password === credentials.password);
  
        if (user) {
          const token = this.generateToken(user, userType);
          const role = userType;
  
          const response = { token, role };
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.role);
  
          return this.http.put<any>(`${this.apiUrl}/${userType}s/${user.id}`, { isLoggedIn: true }).pipe(
            map(() => response)
          );
        } else {
          console.log(`Usuario ${userType} no encontrado o datos incorrectos`);
          return throwError(`Los datos no coinciden o el usuario ${userType} no existe.`);
        }
      }),
      catchError(error => {
        console.error(`Error al intentar iniciar sesión como ${userType}:`, error);
        return throwError(`Error al intentar iniciar sesión como ${userType}, por favor intenta nuevamente.`);
      })
    );
  }

  fetchToken(userId: number, userType: string): Observable<string> {
    return this.http.get<any>(`${this.apiUrl}/${userType}s/${userId}`).pipe(
      map(user => user.token),
      tap(token => {
        localStorage.setItem('token', token);
        this.setUserRole(this.getUserRole()); // Establecer rol de usuario desde el token después de obtenerlo
      })
    );
  }

  registerDoctor(doctorData: any, imgFile: File): Observable<any> {
    // Crea un FormData para enviar los datos del formulario y la imagen
    const formData = new FormData();
    formData.append('name', doctorData.name);
    formData.append('apellido', doctorData.apellido);
    formData.append('email', doctorData.email);
    formData.append('documentNumber', doctorData.documentNumber);
    formData.append('specialtyId', doctorData.specialtyId);
    formData.append('appointmentCost', doctorData.appointmentCost);
    formData.append('password', doctorData.password);
    formData.append('acceptTerms', doctorData.acceptTerms);
    formData.append('img', imgFile);

    return this.http.post<any>(`${this.apiUrl}/doctors`, formData);
  }

  getUserRole(): string {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const parts = token.split('.');
        if (parts.length !== 3) {
          console.error('Error: Token inválido especificado. Faltan partes.');
          return '';
        }

         const decodedToken: any = jwt_decode.jwtDecode(token); 
        return decodedToken.role;
      } catch (error) {
        console.error("Error decodificando el token:", error);
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

  isDoctor(): boolean {
    return this.getUserRole() === 'doctor';
  }

  private loadUserRoleFromToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.setUserRole(this.getUserRole());
    }
  }

  clearToken() {
    localStorage.removeItem('token');
    this.userRole = '';
  }

  logout() {
    this.clearToken();
  }

  private generateToken(user: any, userType: string): string {
    const payload = { role: userType, userId: user.id };
    console.log('Token payload:', payload); // Verifica el contenido del token
    return 'fake-jwt-token'; // Reemplaza esto con la lógica de generación real de tokens
  }
}
