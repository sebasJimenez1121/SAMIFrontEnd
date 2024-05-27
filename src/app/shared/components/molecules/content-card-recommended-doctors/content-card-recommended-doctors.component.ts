import { Component } from '@angular/core';

interface Doctor {
  nombre: string;
  especialidad: string;
}

@Component({
  selector: 'app-content-card-recommended-doctors',
  templateUrl: './content-card-recommended-doctors.component.html',
  styleUrl: './content-card-recommended-doctors.component.css'
})


export class ContentCardRecommendedDoctorsComponent {
    doctors : Doctor[] = [
      { nombre: 'Juan Perez', especialidad: 'Ortodoncia' },
      { nombre: 'Maria Lopez', especialidad: 'Cardiología' },
    ];
}
