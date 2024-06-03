import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: ' StarterTemplateComponent',
  templateUrl: './starter-template.component.html',
  styleUrl: './starter-template.component.css'
})
export class  StarterTemplateComponent {

    myLinks = [
    { url: 'https://www.google.com', label: 'Google' },
    { url: 'https://www.facebook.com', label: 'Facebook' },
    { url: 'https://www.twitter.com', label: 'Twitter' }
  ];

  myOptions = [
    { value: '1', label: 'Cédula de ciudadanía' },
    { value: '2', label: 'Tarjeta de identidad' },
    { value: '3', label: 'Cédula de extranjería' },
    { value: '4', label: 'Registro civil' }
  ];

  constructor(private router: Router) {}
  onAvatarClick(): void {
    this.router.navigate(['/profile']);
  }
}
