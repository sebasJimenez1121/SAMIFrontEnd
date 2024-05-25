import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-stepper',
  templateUrl: './navigation-stepper.component.html',
  styleUrl: './navigation-stepper.component.css'
})
export class NavigationStepperComponent {
  @Input() steps: string[] = ['1','2','3'];
  @Input() currentStep: number = 0;

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}
