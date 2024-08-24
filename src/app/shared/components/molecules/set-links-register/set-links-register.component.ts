import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-links-register',
  templateUrl: './set-links-register.component.html',
  styleUrls: ['./set-links-register.component.css']
})
export class SetLinksRegisterComponent {


  registerText: string = 'Inicio Sesión';

  constructor(private router: Router) {}

  redirectToLoginPage() {
    this.router.navigate(['/login']); 
  }
}
