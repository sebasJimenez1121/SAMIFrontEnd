import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Doctor, DoctorPublic } from '../../../../core/models/doctor.model';
import { Patient } from '../../../../core/models/patient.model';

@Component({
  selector: 'app-stepper-container',
  templateUrl: './stepper-container.component.html',
  styleUrls: ['./stepper-container.component.css']
})
export class StepperContainerComponent {
  steps: string[] = ["Fecha y hora", "Datos Personales", "Metodo De Pago", "Confirmación"];
  @Input() selectedDoctor!: DoctorPublic;
  @Input() selectedPatient!: Patient;

  @Output() prevClicked = new EventEmitter<void>();
  @Output() nextClicked = new EventEmitter<void>();
  @Output() stepChanged = new EventEmitter<number>();
  @Output() finished = new EventEmitter<void>();
  @Output() formDataReady = new EventEmitter<any>(); // Evento para capturar los datos del formulario

  @Input() currentStep: number = 0;
  value: string = 'Continuar';

  constructor() {}

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
}
