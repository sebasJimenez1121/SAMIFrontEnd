
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Admin } from '../models/admin.model';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:10101';

  constructor(private http: HttpClient) {}

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.apiUrl}/admins`);
  }

  getAdminByEmail(token: string): Observable<Admin> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get< {admin : Admin}>(`${this.apiUrl}/admin/profile`, { headers }).pipe(
      map(response => response.admin)
    );
  
  }

  updateAdminProfile(token: string, admin: Admin): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const updateDTO = {
      TokenEmail: token,
      documento: admin.Documento,
      nombre: admin.Nombre,
      apellido: admin.Apellido,
      email: admin.Email,
      Foto_Url: admin.Foto_Url 
    };
    return this.http.put(`${this.apiUrl}/admin/updateProfile`, updateDTO, { headers });
  }

 

  disableAccount(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.apiUrl}/profile/disable`, {}, { headers });
  }

  changePassword(token: string, passwords: { oldPassword: string, newPassword: string }): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.apiUrl}/profile/change-password`, passwords, { headers });
  }
 // Obtener la imagen del perfil del administrador desde el localStorage o desde el backend
 getProfileImage(): string | null {
  return localStorage.getItem('adminProfileImage');
}

// Guardar la imagen de perfil en el localStorage
saveProfileImage(imageBase64: string) {
  localStorage.setItem('adminProfileImage', imageBase64);
}

}
