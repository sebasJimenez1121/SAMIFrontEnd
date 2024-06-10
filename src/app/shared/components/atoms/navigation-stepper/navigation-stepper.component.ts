import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-stepper',
  templateUrl: './navigation-stepper.component.html',
  styleUrls: ['./navigation-stepper.component.css']
})
export class NavigationStepperComponent {
  @Input() steps: string[] = ['Personal Info', 'Education', 'Work and Jobs', 'Review'];
  @Input() currentStep: number = 0;
  @Output() stepChanged: EventEmitter<number> = new EventEmitter<number>();

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      this.stepChanged.emit(this.currentStep);
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.stepChanged.emit(this.currentStep);
    }
  }

  goToStep(step: number) {
    this.currentStep = step;
    this.stepChanged.emit(this.currentStep);
  }
}
