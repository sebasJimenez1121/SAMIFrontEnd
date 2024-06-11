import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-stepper',
  templateUrl: './navigation-stepper.component.html',
  styleUrls: ['./navigation-stepper.component.css']
})
export class NavigationStepperComponent {
  @Input() steps: string[] = ['Fecha Y Hora', 'Informacion Personal', 'Metodo De Pago', 'COnfirmacion'];
  @Input() currentStep: number = 0;
  @Output() currentStepChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() stepChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output() finished: EventEmitter<void> = new EventEmitter<void>();

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      this.currentStepChange.emit(this.currentStep);
      this.stepChanged.emit(this.currentStep);
    } else {
      this.finished.emit();
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.currentStepChange.emit(this.currentStep);
      this.stepChanged.emit(this.currentStep);
    }
  }

  goToStep(step: number) {
    this.currentStep = step;
    this.currentStepChange.emit(this.currentStep);
    this.stepChanged.emit(this.currentStep);
  }
}
