import { Component, Input } from '@angular/core';
// Importa Doctor desde el archivo correcto
import { Doctor } from '../../../../core/models/doctor.model';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent {
  @Input() doctor!: Doctor;
}
