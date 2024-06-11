import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css'],
})
export class InputDateComponent implements OnInit {
  daysOfWeek: string[] = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  months: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  currentYear: number = 0;
  currentMonthIndex: number = 0;
  monthDays: (number | null)[] = [];
  selectedDate: Date | null = null;
  availableTimeSlots: string[] = [];
  selectedTimeSlot: string | null = null;
  @Output() dateSelected = new EventEmitter<Date>();
  @Output() timeSlotSelected = new EventEmitter<string>();

  @Input() doctor: any;

  constructor() {}

  ngOnInit(): void {
    const now = new Date();
    this.currentYear = now.getFullYear();
    this.currentMonthIndex = now.getMonth();
    this.generateCalendarDays();
  }

  generateCalendarDays(): void {
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonthIndex, 1).getDay();
    const daysInMonth = new Date(this.currentYear, this.currentMonthIndex + 1, 0).getDate();

    // Ajustamos el primer día de la semana para que Lunes sea el primer día (en lugar de Domingo)
    const adjustedFirstDayOfMonth = (firstDayOfMonth + 6) % 7;

    // Crear un array de tamaño `adjustedFirstDayOfMonth` con `null` y concatenar los días del mes
    this.monthDays = [...Array(adjustedFirstDayOfMonth).fill(null), ...Array(daysInMonth).fill(0).map((_, i) => i + 1)];
  }

  selectDate(day: number | null): void {
    if (day !== null) {
      this.selectedDate = new Date(this.currentYear, this.currentMonthIndex, day);
      this.dateSelected.emit(this.selectedDate);
      this.fetchAvailableTimeSlots(this.selectedDate);
    }
  }

  selectTimeSlot(timeSlot: string): void {
    this.selectedTimeSlot = timeSlot;
    this.timeSlotSelected.emit(this.selectedTimeSlot);
  }


  fetchAvailableTimeSlots(date: Date): void {
    // Aquí deberías hacer una solicitud al backend para obtener las horas disponibles
    // Ejemplo: this.calendarService.getAvailableTimeSlots(date).subscribe(...);

    // Simulación de datos
    this.availableTimeSlots = ['3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'];
  }

  changeMonth(offset: number): void {
    this.currentMonthIndex += offset;

    if (this.currentMonthIndex < 0) {
      this.currentMonthIndex = 11;
      this.currentYear -= 1;
    } else if (this.currentMonthIndex > 11) {
      this.currentMonthIndex = 0;
      this.currentYear += 1;
    }

    this.generateCalendarDays();
  }
}
