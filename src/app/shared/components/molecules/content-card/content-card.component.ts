import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DoctorPublic } from '../../../../core/models/doctor.model';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent {
  @Input() doctor!: DoctorPublic;
  @Output() buttonClick = new EventEmitter<void>();

  handleClick() {
    this.buttonClick.emit();
  }
}
