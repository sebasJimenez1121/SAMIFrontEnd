import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DoctorPublic } from './../../../../core/models/doctor.model';
import Swal from 'sweetalert2';
import { CalendarOptionsComponent } from '../../molecules/calendar-options/calendar-options.component';

@Component({
  selector: 'app-appointment-modal-reservetion',
  templateUrl: './appointment-modal-reservetion.component.html',
  styleUrls: ['./appointment-modal-reservetion.component.css']
})
export class  AppointmentModalReservetionComponent {
  @Input() doctor!: DoctorPublic;
  @Input() patientId: string = '';
  @Input() isModalVisible: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>();  // Evento para cerrar modal

  @ViewChild(CalendarOptionsComponent) calendarOptions!: CalendarOptionsComponent;  // Referencia al componente hijo

  isClosingAfterSuccess: boolean = false; // Nueva bandera

  // Método para cerrar el modal desde CalendarOptionsComponent sin confirmación
  closeModalWithoutConfirmation(): void {
    this.isClosingAfterSuccess = true;  // Marca como cierre por reserva exitosa
    this.isModalVisible = false; 
    this.closeModalEvent.emit();  // Emitimos el evento para notificar al componente padre
    this.calendarOptions.resetForm(); // Resetea el formulario tras cerrar sin confirmación
  }

  closeModal(): void {
    if (this.isClosingAfterSuccess) {
      this.isClosingAfterSuccess = false; // Resetear la bandera para futuros cierres
      this.isModalVisible = false;
      this.closeModalEvent.emit();
      this.calendarOptions.resetForm(); // Resetea el formulario al cerrar el modal con confirmación
    } else {
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
          this.calendarOptions.resetForm(); // Resetea el formulario al cerrar el modal con confirmación
        }
      });
    }
  }
}
