import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css'],
})
export class InputDateComponent implements OnInit {
  days: string[] = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  months: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  monthRef: number[] = [];
  month: string;
  dates: number[] = [];
  selectedDate: number | null = null;
  selectedDateString: string | null = null;
  availableTimeSlots: string[] = [];
  selectedTimeSlot: string | null = null;

  constructor() {
    const now = new Date();
    const currentMonthIndex = now.getMonth();
    this.month = this.months[currentMonthIndex];
    this.generateMonthDays(now.getFullYear());
    this.showDays(this.monthRef[currentMonthIndex]);
  }

  ngOnInit(): void {}

  generateMonthDays(year: number): void {
    for (let i = 1; i <= 12; i++) {
      this.monthRef.push(new Date(year, i, 0).getDate());
    }
  }

  showDays(days: number): void {
    this.dates = [];
    for (let i = 1; i <= days; i++) {
      this.dates.push(i);
    }
  }

  selectDate(date: number): void {
    this.selectedDate = date;
    const currentMonthIndex = this.months.indexOf(this.month) + 1;
    this.selectedDateString = `${new Date().getFullYear()}-${currentMonthIndex}-${date}`;
    this.fetchAvailableTimeSlots(this.selectedDateString);
  }

  fetchAvailableTimeSlots(date: string): void {
    
    this.availableTimeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'];
  }

  selectTimeSlot(timeSlot: string): void {
    this.selectedTimeSlot = timeSlot;
  }

  

  next(): void {
    const currentMonthIndex = this.months.indexOf(this.month);
    if (currentMonthIndex < 11) {
      this.month = this.months[currentMonthIndex + 1];
      this.showDays(this.monthRef[currentMonthIndex + 1]);
    }
  }

  prev(): void {
    const currentMonthIndex = this.months.indexOf(this.month);
    if (currentMonthIndex > 0) {
      this.month = this.months[currentMonthIndex - 1];
      this.showDays(this.monthRef[currentMonthIndex - 1]);
    }
  }
}



