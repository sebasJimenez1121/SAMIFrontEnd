import { Component, Input } from '@angular/core';

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
      @Input() nombre = 'Juan Perez';
      @Input() especialidad = 'Ortodoncia';
}
