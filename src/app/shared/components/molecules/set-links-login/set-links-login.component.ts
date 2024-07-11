import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-links-login',
  templateUrl: './set-links-login.component.html',
  styleUrls: ['./set-links-login.component.css']
})
export class SetLinksLoginComponent {
 
  forgotPasswordText: string = '¿Olvidaste tu contraseña?';
  registerText: string = 'Registrarse';
  
  constructor(private router: Router) {}

  redirectToRegisterPage() {
    this.router.navigate(['/register']);
  }
}
