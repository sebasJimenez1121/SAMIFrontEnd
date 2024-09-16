import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { DoctorPublic } from '../../../../core/models/doctor.model';
import { AppointmentResponse } from '../../../../core/models/response.model';
import { CitaService } from '../../../../core/service/cita.service';
import Swal from 'sweetalert2';
import { AppointmentCreate } from '../../../../core/models/appointment.model';

@Component({
  selector: 'app-calendar-options',
  templateUrl: './calendar-options.component.html',
  styleUrls: ['./calendar-options.component.css']
})
export class CalendarOptionsComponent implements OnChanges {

  @Input() doctor!: DoctorPublic;
  @Input() patientId: string = ""; 

  @Output() closeModalEvent = new EventEmitter<void>();

  selectedDate!: string;
  selectedTime!: string;

  constructor(private citaService: CitaService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['doctor'] || changes['patientId']) {
      // Restablecer estado interno cuando cambien las entradas
      this.selectedDate = '';
      this.selectedTime = '';
    }
  }

  handleDateAndTimeSelection($event: { date: string; time: string; }) {
    this.selectedDate = $event.date;
    this.selectedTime = $event.time;
  }
  
  confirmReservation() {
    if (this.selectedDate && this.selectedTime) {
      const reservationData: AppointmentCreate = {
        horaCita: this.selectedTime,
        fechaCita: this.selectedDate,
        fKIdDoct: this.doctor.Id,
        fKIdPac: this.patientId
      };
  
      this.citaService.crearCita(reservationData).subscribe(
        (response: AppointmentResponse) => {
          const codigoCita = response.codigoCita;
          Swal.fire({
            icon: 'success',
            title: 'Reserva confirmada',
            text: `Código de cita: ${codigoCita}`,
          }).then(() => {
            window.location.reload(); 
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

  isReservationDisabled(): boolean {
    return !this.selectedDate || !this.selectedTime;
  }
}
