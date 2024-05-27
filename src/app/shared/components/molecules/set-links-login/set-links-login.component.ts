import { Component } from '@angular/core';

@Component({
  selector: 'app-set-links-login',
  templateUrl: './set-links-login.component.html',
  styleUrl: './set-links-login.component.css'
})
export class SetLinksLoginComponent {
 
  forgotPasswordText: string = '¿Olvidaste tu contraseña?';
  registerText: string = 'Registrarse';
}
