import { Component, Input, Output, EventEmitter, Inject, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DoctorPublic } from '../../../../core/models/doctor.model';
import { AppointmentResponse } from '../../../../core/models/response';
import { CitaService } from '../../../../core/service/cita.service';
import { StepperService } from '../../../../core/service/stepper.service';
import { DYNAMIC_DATA } from '../../../../core/tokens/dynamic-data.token';
import { AppointmentCreate } from '../../../../core/models/appointment.model';
import Swal from 'sweetalert2';
import { Patient } from '../../../../core/models/patient.model';

@Component({
  selector: 'app-calendar-options',
  templateUrl: './calendar-options.component.html',
  styleUrls: ['./calendar-options.component.css']
})
export class CalendarOptionsComponent implements OnInit, OnDestroy {

  doctor!: DoctorPublic;
  patient!: Patient;

  @Output() canProceed = new EventEmitter<boolean>();  // Controla si el stepper puede continuar
  @Output() stepConfirmed = new EventEmitter<boolean>(); // Emite cuando la reserva se confirma
  
  selectedDate!: string;
  selectedTime!: string;
  isSubmitting: boolean = false;  // Nueva bandera para controlar la petición en curso

  private submitStepSubscription!: Subscription;

  constructor(
    private citaService: CitaService, 
    private stepperService: StepperService,
    @Inject(DYNAMIC_DATA) private data: { doctor: DoctorPublic, patient: Patient }
  ) {
    this.doctor = data.doctor;
    this.patient = data.patient;
  }

  ngOnInit() {
    console.log('Doctor in CalendarOptions:', this.doctor);
    console.log('Patient in CalendarOptions:', this.patient);
    
    // Nos suscribimos al evento submit para confirmar la reserva
    this.submitStepSubscription = this.stepperService.getSubmitStep().subscribe(() => {
      this.confirmReservation();  // Confirmar la reserva cuando se reciba el evento submit
    });
  }
  
  handleDateAndTimeSelection($event: { date: string; time: string; }) {
    this.selectedDate = $event.date;
    this.selectedTime = $event.time;

    console.log('Selected date:', this.selectedDate);
    console.log('Selected time:', this.selectedTime);

    // Emitimos canProceed solo si se ha seleccionado tanto la fecha como la hora
    if (this.selectedDate && this.selectedTime) {
      this.canProceed.emit(true);  // Permitir avanzar si ambos están seleccionados
    } else {
      this.canProceed.emit(false); // No permitir avanzar si falta algún valor
    }
  }
  
  confirmReservation() {
    if (this.selectedDate && this.selectedTime && !this.isSubmitting) {
      this.isSubmitting = true;  // Marcar como en proceso
      
      const reservationData: AppointmentCreate = {
        horaCita: this.selectedTime,
        fechaCita: this.selectedDate,
        fKIdDoct: this.doctor.Id,
        fKIdPac: this.patient.Id
      };
  
      this.citaService.crearCita(reservationData).subscribe(
        (response: AppointmentResponse) => {
          const codigoCita = response.codigoCita;
          localStorage.setItem('codigoCita', codigoCita);
          Swal.fire({
            icon: 'success',
            title: '¡Cita Confirmada!',
            text: `Tu cita ha sido reservada con éxito. Código de Cita: ${codigoCita}`,
          });
  
          // Emitir stepConfirmed solo después de que la reserva sea exitosa
          this.stepConfirmed.emit(true);
  
          // Desuscribirse
          this.unsubscribeSubmitStep();
          this.isSubmitting = false;  // Marcar como finalizado
        },
        error => {
          let errorMessage = 'Ocurrió un problema al intentar reservar la cita. Por favor, inténtalo de nuevo.';
  
          // Manejar errores dependiendo del código de estado
          if (error.status === 400) {
            errorMessage = 'Solicitud inválida. Revisa los datos.';
          } else if (error.status === 401) {
            errorMessage = 'No estás autorizado.';
          } else if (error.status === 500) {
            errorMessage = 'Error interno del servidor.';
          }
  
          Swal.fire({
            icon: 'error',
            title: 'Error al reservar la cita',
            text: errorMessage,
          });
  
          // Emitir falso en caso de error
          this.stepConfirmed.emit(false);
  
          this.unsubscribeSubmitStep();
          this.isSubmitting = false;  // Marcar como finalizado
        }
      );
    }
  }
  
  // Método para desuscribirse del evento de envío del paso
  unsubscribeSubmitStep() {
    if (this.submitStepSubscription) {
      this.submitStepSubscription.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.unsubscribeSubmitStep();
  }
}
