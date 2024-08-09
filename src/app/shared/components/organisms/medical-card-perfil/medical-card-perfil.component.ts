import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Doctor } from '../../../../core/models/doctor.model';

@Component({
  selector: 'app-medical-card-perfil',
  templateUrl: './medical-card-perfil.component.html',
  styleUrl: './medical-card-perfil.component.css'
})
export class MedicalCardPerfilComponent {
  @Input() doctor!: Doctor;

  @Output() buttonClick = new EventEmitter<void>();

  handleClick() {
    this.buttonClick.emit();
  }
}
