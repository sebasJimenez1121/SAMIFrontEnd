import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Doctor } from '../../../../core/models/doctor.model';
import { Patient } from '../../../../core/models/patient.model';

@Component({
  selector: 'app-modal-reservation-form',
  templateUrl: './modal-reservation-form.component.html',
  styleUrls: ['./modal-reservation-form.component.css']
})
export class ModalReservationFormComponent {
  @Input() isModalVisible: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() modalClosed = new EventEmitter<void>(); 
  @Input() selectedPatient!: Patient;
  @Input() selectedDoctor!: Doctor;
  

  closeModal() {
    this.isModalVisible = false;
    this.closeModalEvent.emit();
    this.modalClosed.emit(); 
  }

  onFinished(data: any) {
    this.closeModal();
  }
}
