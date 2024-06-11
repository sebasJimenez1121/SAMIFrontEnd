import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Doctor } from '../../../../core/models/doctor.model';
import { Patient } from '../../../../core/models/patient.model';

@Component({
  selector: 'app-stepper-container',
  templateUrl: './stepper-container.component.html',
  styleUrls: ['./stepper-container.component.css']
})
export class StepperContainerComponent {
  steps: string[] = ["Fecha y hora","Datos Pesonales","Metodo De Pago", "Confirmación"];
  @Input() selectedDoctor!: Doctor;
  @Input() selectedPatient!: Patient;

  @Output() prevClicked = new EventEmitter<void>();
  @Output() nextClicked = new EventEmitter<void>();
  @Output() stepChanged = new EventEmitter<number>();
  @Output() finished = new EventEmitter<void>();

  currentStep: number = 0;
  value: string = 'Continuar';

  constructor() {}

  onStepChanged(step: number) {
    this.currentStep = step;
    this.updateButtonValue();
    this.stepChanged.emit(this.currentStep);
  }

  onFinished() {
    this.finished.emit();
    this.resetStepper();
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

  isCurrentStepValid(): boolean {
    // Implement your validation logic here
    return true;
  }

  handlePrevClick() {
    this.prevClicked.emit();
    this.prevStep();
  }

  handleNextClick() {
    this.nextClicked.emit();
    this.nextOrFinish();
  }

  handleSelectionMade(selection: { date: Date, time: string }) {
    // Implementar según sea necesario para cada componente de paso
    this.nextOrFinish();
  }

  resetStepper() {
    this.currentStep = 0;
    this.updateButtonValue();
    this.stepChanged.emit(this.currentStep);
  }
}
