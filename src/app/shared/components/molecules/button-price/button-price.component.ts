import { Component,Input,Output } from '@angular/core';
import { DoctorPublic } from '../../../../core/models/doctor.model';
import { Patient } from '../../../../core/models/patient.model';

@Component({
  selector: 'app-button-price',
  templateUrl: './button-price.component.html',
  styleUrl: './button-price.component.css'
})
export class ButtonPriceComponent {
  @Input() valorCita?: number;
  @Input() doctor!: DoctorPublic;
  @Input() patient!: Patient;
  @Output() handleButtonClick(action: () => void) {
    action();
  }

  OnclickLogin(){
    console.log("hola");
  }
}
