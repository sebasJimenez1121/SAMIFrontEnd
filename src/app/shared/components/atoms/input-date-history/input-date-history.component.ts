import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-date-history',
  templateUrl: './input-date-history.component.html',
  styleUrls: ['./input-date-history.component.css']
})
export class InputDateHistoryComponent {
  @ViewChild('dateInput') dateInput: any;

  selectedDate: string;

  constructor() {
    this.selectedDate = this.getCurrentDate(); 
  }

  getCurrentDate(): string {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  }

  openCalendar(): void {
    this.dateInput.open(); 
  }
}
