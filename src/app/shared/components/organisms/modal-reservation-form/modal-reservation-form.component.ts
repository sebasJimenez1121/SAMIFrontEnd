import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DoctorPublic } from '../../../../core/models/doctor.model';
import { SweetAlertService } from '../../../../core/service/sweet-alert.service';

@Component({
  selector: 'app-modal-reservation-form',
  templateUrl: './modal-reservation-form.component.html',
  styleUrls: ['./modal-reservation-form.component.css']
})
export class ModalReservationFormComponent {
  @Input() isModalVisible: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() modalClosed = new EventEmitter<void>(); 
  @Input() selectedDoctor!: DoctorPublic;
  
  constructor(private sweetAlert: SweetAlertService ) {}

  closeModal() {
    this.sweetAlert.showConfirmation('¿Estás seguro?', 'Perderás la fecha y hora reservadas.')
      .then((result) => {
        if (result.isConfirmed) {
          this.isModalVisible = false;
          this.closeModalEvent.emit();
          this.modalClosed.emit(); 
          // this.deleteAppointment(); // Borrar la cita si se cierra el modal
        }
      });
  }

  onFinished() {
    this.closeModal();
  }

  // Lógica para eliminar la cita cuando se cierra el modal
  // deleteAppointment() {
  //   const userId = this.selectedPatient.Id;
  //   this.citaService.eliminarCita(userId).subscribe(
  //     response => {
  //       console.log('Cita eliminada:', response);
  //       this.resetStepper(); // Limpiar el stepper después de borrar
  //     },
  //     error => {
  //       console.error('Error al eliminar la cita:', error);
  //     }
  //   );
  // }
}
