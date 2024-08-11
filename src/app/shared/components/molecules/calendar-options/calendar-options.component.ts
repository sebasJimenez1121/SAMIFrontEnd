import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DoctorPublic } from '../../../../core/models/doctor.model';

@Component({
  selector: 'app-calendar-options',
  templateUrl: './calendar-options.component.html',
  styleUrls: ['./calendar-options.component.css']
})
export class CalendarOptionsComponent {
  @Input() doctor!: DoctorPublic;
  @Output() selectionMade = new EventEmitter<{ date: Date, time: string }>();

  selectedDate: Date | null = null;
  selectedTimeSlot: string | null = null;

  onDateSelected(date: Date) {
    this.selectedDate = date;
  }

  onTimeSlotSelected(timeSlot: string) {
    this.selectedTimeSlot = timeSlot;
  }

  confirmSelection() {
    if (this.selectedDate && this.selectedTimeSlot) {
      this.selectionMade.emit({ date: this.selectedDate, time: this.selectedTimeSlot });
    }
  }
}
