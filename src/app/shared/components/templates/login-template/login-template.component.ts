import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/service/auth-service.service';

@Component({
  selector: 'LoginTemplateComponent',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.css']
})
export class LoginTemplateComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
    this.redirectBasedOnRole();
  }

  private redirectBasedOnRole() {
    this.authService.getUserRole().subscribe({
      next: (userRole) => {
        switch (userRole) {
          case 'admin':
            this.router.navigate(['/home-admin']);
            break;
          case 'medico':
            this.router.navigate(['/home-doctor']);
            break;
          case 'paciente':
            this.router.navigate(['/home-paciente']);
            break;
          default:
            this.router.navigate(['/home']); 
            console.error('Rol de usuario no reconocido:', userRole);
            break;
        }
      },
      error: (err) => {
        console.error('Error obteniendo el rol:', err);
        this.router.navigate(['/home']); 
      }
    });
  }
}
