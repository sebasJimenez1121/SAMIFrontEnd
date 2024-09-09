import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CitaService } from '../../../../core/service/cita.service';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css'],
})
export class InputDateComponent implements OnInit {
  selectHoraPosible : boolean = false;
  selectedDate: Date | null = null;
  unavailableHours: string[] = [];
  availableHours: string[] = [];
  selectedHour: string | null = null;

  allHours: string[] = [
    '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'
  ];

  @Output() dateAndTimeSelected = new EventEmitter<{ date: string, time: string }>();

  constructor(private scheduleService: CitaService) {}

  ngOnInit(): void {}

  onDateChange(date: Date | null): void {
    this.resetDateAndTime();

    if (date) {
      this.selectedDate = date;

      const formattedDate = this.selectedDate.toISOString().split('T')[0];
      

      this.scheduleService.getUnavailableHours(formattedDate).subscribe(
        (response: { horas: string[] }) => {
          this.unavailableHours = response.horas.map(hora => hora.substring(0, 5));
          this.availableHours = this.allHours.filter(hour => !this.unavailableHours.includes(hour));
        },
        error => {
          console.error('Error al obtener las horas no disponibles:', error);
        }
      );
    }
  }

  selectHour(hour: string): void {
    this.selectedHour = hour;
    this.emitDateAndTime();
  }

  emitDateAndTime() {
    if (this.selectedDate && this.selectedHour) {
      this.dateAndTimeSelected.emit({
        date: this.selectedDate.toISOString().split('T')[0],
        time: this.selectedHour
      });
    }
  }

  scrollUp(): void {
    const carousel = document.querySelector('.hour-carousel');
    if (carousel) {
      carousel.scrollBy({
        top: -50,
        behavior: 'smooth'
      });
    }
  }

  scrollDown(): void {
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
    today.setHours(0, 0, 0, 0);

    return cellDate <= today ? 'past-date' : '';
  };

  dateFilter = (date: Date | null): boolean => {
    if (!date) {
      return false;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return date > today;
  };

  resetDateAndTime(): void {
    this.selectedDate = null;
    this.selectedHour = null;
    this.availableHours = [];
    this.unavailableHours = [];
  }
}
