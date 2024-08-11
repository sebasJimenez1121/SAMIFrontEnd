import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DoctorPublic } from '../../../../core/models/doctor.model';


@Component({
  selector: 'app-medical-card',
  templateUrl: './medical-card.component.html',
  styleUrls: ['./medical-card.component.css']
})
export class MedicalCardComponent {
  @Input() doctor!: DoctorPublic;

  @Output() buttonClick = new EventEmitter<void>();

  handleClick() {
    this.buttonClick.emit();
  }
}
