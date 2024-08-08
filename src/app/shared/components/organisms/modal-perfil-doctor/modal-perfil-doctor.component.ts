import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Doctor } from '../../../../core/models/doctor.model';

@Component({
  selector: 'app-modal-perfil-doctor',
  templateUrl: './modal-perfil-doctor.component.html',
  styleUrls: ['./modal-perfil-doctor.component.css']
})
export class ModalPerfilDoctorComponent {
  @Input() doctor!: Doctor;
  @Output() closeModal = new EventEmitter<void>();

  handleClose() {
    this.closeModal.emit();
  }
}
