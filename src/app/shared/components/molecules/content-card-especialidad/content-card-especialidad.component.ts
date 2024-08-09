import { Component, Input } from '@angular/core';
import { Specialty } from '../../../../core/models/doctor.model';

@Component({
  selector: 'app-content-card-especialidad',
  templateUrl: './content-card-especialidad.component.html',
  styleUrls: ['./content-card-especialidad.component.css']
})
export class ContentCardEspecialidadComponent {
  @Input() Specialty!: Specialty;
}
