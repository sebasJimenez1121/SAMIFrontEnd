import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Doctor } from '../../../../core/models/doctor.model';


@Component({
  selector: 'app-medical-card',
  templateUrl: './medical-card.component.html',
  styleUrls: ['./medical-card.component.css']
})
export class MedicalCardComponent {
  @Input() doctor!: Doctor;

  @Output() buttonClick = new EventEmitter<void>();

  handleClick() {
    this.buttonClick.emit();
  }
}
