import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Doctor } from '../../../../core/models/doctor.model';

@Component({
  selector: 'app-content-card-perfil-doctor',
  templateUrl: './content-card-perfil-doctor.component.html',
  styleUrls: ['./content-card-perfil-doctor.component.css']
})
export class ContentCardPerfilDoctorComponent {
  @Input() doctor!: Doctor;
  @Output() buttonClick = new EventEmitter<void>();
  showModal: boolean = false;  // Controla la visibilidad del modal

  handleClick() {
    this.showModal = !this.showModal;  // Alternar visibilidad del modal
  }
}
