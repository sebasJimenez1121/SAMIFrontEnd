import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CitaService } from '../../../../core/service/cita.service';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css'],
})
export class InputDateComponent implements OnInit {
  selectedDate: Date | null = null;
  unavailableHours: string[] = [];
  availableHours: string[] = [];
  selectedHour: string | null = null;

  allHours: string[] = [
    '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'
  ];

  @Output() appointmentSubmitted = new EventEmitter<{ date: string, hour: string }>();

  constructor(private scheduleService: CitaService) {}

  ngOnInit(): void {}

  onDateChange(date: Date | any): void {
    this.selectedDate = date;
    this.availableHours = [];
    this.unavailableHours = [];

    if (date) {
      const formattedDate = date.toISOString().split('T')[0];
      this.scheduleService.getUnavailableHours(formattedDate).subscribe(
        (response: { horas: string[] }) => {
          this.unavailableHours = response.horas;
          this.availableHours = this.allHours.filter(hour => !this.unavailableHours.includes(hour));
        },
        error => {
          console.error('Error fetching hours:', error);
        }
      );
    }
  }

  selectHour(hour: string) {
    this.selectedHour = hour;
  }

  scrollUp() {
    const carousel = document.querySelector('.hour-carousel');
    if (carousel) {
      carousel.scrollBy({
        top: -50,
        behavior: 'smooth'
      });
    }
  }

  scrollDown() {
    const carousel = document.querySelector('.hour-carousel');
    if (carousel) {
      carousel.scrollBy({
        top: 50,
        behavior: 'smooth'
      });
    }
  }

  dateClass = (cellDate: Date | null): string => {
    if (!cellDate) {
      return '';
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Establecer la hora a medianoche para comparar solo las fechas

    return cellDate <= today ? 'past-date' : '';
  };

  dateFilter = (date: Date | null): boolean => {
    if (!date) {
      return false;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Establecer la hora a medianoche para comparar solo las fechas

    // Deshabilitar hoy y cualquier fecha anterior a hoy
    return date > today;
  };

  submitAppointment() {
    if (this.selectedDate && this.selectedHour) {
      const appointmentData = {
        date: this.selectedDate.toISOString().split('T')[0],
        hour: this.selectedHour
      };
      this.appointmentSubmitted.emit(appointmentData);
      console.log('Submit appointment:', appointmentData);
    } else {
      console.error('Date or hour not selected');
    }
  }
}
