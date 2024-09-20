import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { DoctorPublic } from '../../../../core/models/doctor.model';
import { AppointmentResponse } from '../../../../core/models/response.model';
import { CitaService } from '../../../../core/service/cita.service';
import Swal from 'sweetalert2';
import { AppointmentCreate } from '../../../../core/models/appointment.model';
import { Patient } from '../../../../core/models/patient.model';

@Component({
  selector: 'app-calendar-options',
  templateUrl: './calendar-options.component.html',
  styleUrls: ['./calendar-options.component.css']
})
export class CalendarOptionsComponent implements OnChanges {
  @Input() doctor!: DoctorPublic;
  @Input() patient!: Patient; 
  @Output() closeModalEvent = new EventEmitter<void>();  // Evento para cerrar modal sin confirmación
  @Output() closeWithoutConfirmation = new EventEmitter<void>(); // Evento para cerrar después de éxito
  @Output() resetFormEvent = new EventEmitter<void>(); // Evento para resetear el formulario desde el padre

  selectedDate!: string;
  selectedTime!: string;
  notes: string = ''; // Variable para el textarea

  constructor(private citaService: CitaService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['doctor'] || changes['patientId']) {
      this.resetForm();  // Resetear el formulario cuando cambien los inputs
    }
  }

  handleDateAndTimeSelection($event: { date: string; time: string; }) {
    this.selectedDate = $event.date;
    this.selectedTime = $event.time;
  }

  confirmReservation() {
    if (this.selectedDate && this.selectedTime && this.notes) { // Asegurarse de que todos los campos estén llenos
      const reservationData: AppointmentCreate = {
        motivoCita: this.notes, 
        horaCita: this.selectedTime,
        fechaCita: this.selectedDate,
        fKIdDoct: this.doctor.Id,
        fKIdPac: this.patient.Id,
        EmailPac: this.patient.Email
      };

      this.citaService.crearCita(reservationData).subscribe(
        (response: AppointmentResponse) => {
          const codigoCita = response.codigoCita;
          Swal.fire({
            icon: 'success',
            title: 'Reserva confirmada',
            text: `Código de cita: ${codigoCita}`,
          }).then(() => {
            this.resetForm(); // Resetea el formulario tras el éxito
            this.closeWithoutConfirmation.emit();  // Cierra el modal sin mostrar alerta de confirmación
          });
        },
        (error) => {
          console.error('Error al crear la cita', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo confirmar la reserva. Intente nuevamente.',
          });
        }
      );
    }
  }

  closeModal() {
    this.resetForm();  // Resetear el formulario al cerrar
    this.closeModalEvent.emit();  // Emitir el evento para cerrar el modal
  }

  resetForm() {
    this.selectedDate = '';
    this.selectedTime = '';
    this.notes = '';
    this.resetFormEvent.emit(); // Notifica al padre que el formulario ha sido reseteado
  }

  isReservationDisabled(): boolean {
    return !this.selectedDate || !this.selectedTime || !this.notes; // Condición para deshabilitar el botón
  }
}
