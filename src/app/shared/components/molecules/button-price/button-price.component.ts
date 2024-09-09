import { Component, Input, Inject } from '@angular/core';
import { DoctorPublic } from '../../../../core/models/doctor.model';
import { Patient } from '../../../../core/models/patient.model';
import { DYNAMIC_DATA } from '../../../../core/tokens/dynamic-data.token';

@Component({
  selector: 'app-button-price',
  templateUrl: './button-price.component.html',
  styleUrls: ['./button-price.component.css']
})
export class ButtonPriceComponent {
  @Input() valorCita?: number;
  doctor!: DoctorPublic;
  patient!: Patient;

  constructor(
    @Inject(DYNAMIC_DATA) private data: { doctor: DoctorPublic; patient: Patient }
  ) {
    // Recibe los datos inyectados
    this.doctor = data.doctor;
    this.patient = data.patient;
  }

  handleButtonClick(action: () => void) {
    action();
  }

  OnclickLogin() {
    console.log("Hola");
  }
}
