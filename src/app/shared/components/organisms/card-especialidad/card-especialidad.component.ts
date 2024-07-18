import { Component, Input } from '@angular/core';
import { Specialty } from '../../../../core/models/doctor.model';

@Component({
  selector: 'app-card-especialidad',
  templateUrl: './card-especialidad.component.html',
  styleUrls: ['./card-especialidad.component.css']
})
export class CardEspecialidadComponent {
  @Input() Specialty!: Specialty;
}
