
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
  monthDay: number;
  dates: number[] = [];
  today: number;
  selectedDateId: string = '';
  currentMonthIndex: number;
  now: Date;

  constructor() {
    this.now = new Date();
    this.currentMonthIndex = this.now.getMonth();
    this.today = this.now.getDate();
    this.month = this.months[this.currentMonthIndex];
    this.generateMonthDays(this.now.getFullYear());
    this.monthDay = this.monthRef[this.currentMonthIndex];
    this.showDays(this.monthDay);
  }

  ngOnInit(): void {
    this.highlightToday();
  }

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

  highlightToday(): void {
    if (this.now.getMonth() === this.currentMonthIndex) {
      this.selectedDateId = this.generateDateId(this.today);
    }
  }

  generateDateId(date: number): string {
    return date.toString() + this.currentMonthIndex.toString();
  }

  selectDate(date: number): void {
    this.selectedDateId = this.generateDateId(date);
  }

 

  next(): void {
    if (this.currentMonthIndex < 11) {
      this.currentMonthIndex++;
      this.month = this.months[this.currentMonthIndex];
      this.monthDay = this.monthRef[this.currentMonthIndex];
      this.showDays(this.monthDay);
      this.highlightToday();
    }
  }

  prev(): void {
    if (this.currentMonthIndex > 0) {
      this.currentMonthIndex--;
      this.month = this.months[this.currentMonthIndex];
      this.monthDay = this.monthRef[this.currentMonthIndex];
      this.showDays(this.monthDay);
      this.highlightToday();
    }
  }
}
