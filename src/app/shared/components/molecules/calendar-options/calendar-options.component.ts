import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DoctorPublic } from '../../../../core/models/doctor.model';

@Component({
  selector: 'app-calendar-options',
  templateUrl: './calendar-options.component.html',
  styleUrls: ['./calendar-options.component.css']
})
export class CalendarOptionsComponent {
  @Input() doctor!: DoctorPublic;
  @Output() dateAndTimeSelected = new EventEmitter<{ date: string, time: string }>();

  selectedDate!: string;
  selectedTime!: string;

  // Este método se llamaría cuando el usuario seleccione la fecha y la hora
  onDateAndTimeSelected() {
    this.dateAndTimeSelected.emit({
      date: this.selectedDate,
      time: this.selectedTime
    });
  }
}
