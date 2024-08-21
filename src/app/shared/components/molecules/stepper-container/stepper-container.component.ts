import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DoctorPublic } from '../../../../core/models/doctor.model';
import { Patient } from '../../../../core/models/patient.model';
import { CitaService } from './../../../../core/service/cita.service';

@Component({
  selector: 'app-stepper-container',
  templateUrl: './stepper-container.component.html',
  styleUrls: ['./stepper-container.component.css']
})
export class StepperContainerComponent {
  steps: string[] = ["Fecha y hora", "Datos Personales", "Método De Pago", "Confirmación"];
  
  @Input() selectedDoctor!: DoctorPublic;
  @Input() selectedPatient!: Patient;
  @Input() currentStep: number = 0;

  @Output() prevClicked = new EventEmitter<void>();
  @Output() nextClicked = new EventEmitter<void>();
  @Output() stepChanged = new EventEmitter<number>();
  @Output() finished = new EventEmitter<void>();
  @Output() formDataReady = new EventEmitter<any>();

  value: string = 'Continuar';

  selectedDate!: string;
  selectedTime!: string;

  constructor(private citaService: CitaService) {}

  handlePrevClick() {
    this.prevClicked.emit();
    this.prevStep();
  }

  handleNextClick() {
    this.nextClicked.emit();
    this.nextOrFinish();
  }

  handleFormDataReady(formData: any) {
    this.formDataReady.emit(formData);
    this.nextOrFinish();
  }

  handleDateAndTimeSelected(event: { date: string, time: string }) {
    this.selectedDate = event.date;
    this.selectedTime = event.time;
    this.nextOrFinish();
  }

  nextOrFinish() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      this.stepChanged.emit(this.currentStep);
    } else {
      this.onFinished();
    }
    this.updateButtonValue();
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.stepChanged.emit(this.currentStep);
    }
    this.updateButtonValue();
  }

  updateButtonValue() {
    this.value = this.currentStep < this.steps.length - 1 ? 'Continuar' : 'Confirmar';
  }

  onFinished() {
    this.finished.emit();
    this.resetStepper();
  }

  resetStepper() {
    this.currentStep = 0;
    this.updateButtonValue();
    this.stepChanged.emit(this.currentStep);
  }

  handleConfirmAppointment() {
    const appointmentData = {
      horaCita: this.selectedTime,
      fechaCita: this.selectedDate,
      fKIdDoct: this.selectedDoctor.Id,
      fKIdPac: this.selectedPatient.Id,
    };

    this.citaService.crearCita(appointmentData).subscribe(
      response => {
        console.log('Cita confirmada:', response);
        this.onFinished(); // Resetear el stepper después de confirmar
      },
      error => {
        console.error('Error al confirmar la cita:', error);
      }
    );
  }

  // Nueva función para borrar la cita
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
