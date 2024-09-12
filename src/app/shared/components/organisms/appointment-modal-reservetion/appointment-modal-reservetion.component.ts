import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DoctorPublic } from './../../../../core/models/doctor.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-appointment-modal-reservetion',
  templateUrl: './appointment-modal-reservetion.component.html',
  styleUrls: ['./appointment-modal-reservetion.component.css']
})
export class AppointmentModalReservetionComponent {
  @Input() doctor!: DoctorPublic;
  @Input() patientId: string = '';

  @Input() isModalVisible: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>();  // Evento para cerrar modal

  closeModal(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Perderás el progreso del agendamiento de cita si cierras.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, salir',
      cancelButtonText: 'No, continuar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.isModalVisible = false;  // Cierra el modal
        this.closeModalEvent.emit();  // Emitimos el evento para notificar al componente padre
      }
    });
  }
}
