import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-links-register',
  templateUrl: './set-links-register.component.html',
  styleUrls: ['./set-links-register.component.css']
})
export class SetLinksRegisterComponent {

  forgotPasswordText: string = '¿Ya tienes una cuenta?';
  registerText: string = 'Inicia Sesión';

  constructor(private router: Router) {}

  redirectToLoginPage() {
    this.router.navigate(['/login']); 
  }
}
