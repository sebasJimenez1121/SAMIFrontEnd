import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DoctorPublic } from '../../../../core/models/doctor.model';

@Component({
  selector: 'app-medical-card-perfil',
  templateUrl: './medical-card-perfil.component.html',
  styleUrl: './medical-card-perfil.component.css'
})
export class MedicalCardPerfilComponent {
  @Input() doctor!: DoctorPublic;

  @Output() buttonClick = new EventEmitter<void>();

  handleClick() {
    this.buttonClick.emit();
  }
}
