import { Component, Input } from '@angular/core';
import { Doctor } from '../../../../core/models/medico.model';


@Component({
  selector: 'app-medical-card',
  templateUrl: './medical-card.component.html',
  styleUrls: ['./medical-card.component.css']
})
export class MedicalCardComponent {
  @Input() doctor!: Doctor;
}
