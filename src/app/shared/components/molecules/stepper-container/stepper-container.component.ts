import { Component, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { Doctor } from '../../../../core/models/doctor.model';



@Component({
  selector: 'app-stepper-container',
  templateUrl: './stepper-container.component.html',
  styleUrls: ['./stepper-container.component.css']
})
export class StepperContainerComponent {
  @Input() steps: string[] = [];
  @Input() currentStep: number = 0;
  @Input() selectedDoctor: Doctor | null = null;

  @Output() prevClicked = new EventEmitter<void>();
  @Output() nextClicked = new EventEmitter<void>();
  @Output() stepChanged = new EventEmitter<number>();
  @Output() finished = new EventEmitter<void>();

  @ViewChild('step1') step1Template!: TemplateRef<any>;
  @ViewChild('step2') step2Template!: TemplateRef<any>;
  // Agrega más ViewChild para cada plantilla adicional según sea necesario

  stepTemplates: TemplateRef<any>[] = [];
  stepData: any[] = [];

  value: string = 'Continuar';

  constructor() {}

  ngOnInit() {
    // Inicializa el arreglo de plantillas
    this.stepTemplates.push(this.step1Template, this.step2Template);
    // Agrega más plantillas si es necesario
  }


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
    this.stepData[this.currentStep] = {
      doctorId: this.selectedDoctor?.id,
      doctorName: this.selectedDoctor?.name,
      doctorSpecialty: this.selectedDoctor?.specialtyName,
      selectedDate: selection.date,
      selectedTime: selection.time
    };
    this.nextOrFinish();
  }

  resetStepper() {
    this.currentStep = 0;
    this.stepData = [];
    this.updateButtonValue();
    this.stepChanged.emit(this.currentStep);
  }
}
