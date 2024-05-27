import { Component } from '@angular/core';

@Component({
  selector: 'app-set-links-register',
  templateUrl: './set-links-register.component.html',
  styleUrl: './set-links-register.component.css'
})
export class SetLinksRegisterComponent {
 
  forgotPasswordText: string = '¿Ya tienes una cuenta?';
  registerText: string = 'Inicia Sesion';
}
