import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css'],
})
export class InputDateComponent implements OnInit {
  currentDate: Date = new Date();
  selectedDate: Date | null = null;
  availableTimes: string[] = [];
  selectedTime: string = '';
  @Output() dateSelected = new EventEmitter<{ date: Date; time: string }>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.availableTimes = this.generateTimeSlots('07:00', '18:00', 30);
  }

  changeMonth(monthChange: number): void {
    const newDate = new Date(this.currentDate);
    newDate.setMonth(newDate.getMonth() + monthChange);
    this.currentDate = newDate;
  }

  getWeeksInMonth(): Date[][] {
    const weeks: Date[][] = [];
    let currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    currentDate.setDate(currentDate.getDate() - currentDate.getDay());
    while (currentDate.getMonth() !== this.currentDate.getMonth() + 1 || currentDate.getDay() !== 0) {
      const week: Date[] = [];
      for (let i = 0; i < 7; i++) {
        week.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
      weeks.push(week);
    }
    return weeks;
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  }

  isPastDate(date: Date): boolean {
    const today = new Date();
    return date < today && date.getDate() !== today.getDate();
  }

  selectDate(date: Date): void {
    if (!this.isPastDate(date)) {
      this.selectedDate = date;
      this.fetchAvailableTimes(date);
    }
  }

  isCurrentMonth(): boolean {
    const today = new Date();
    return this.currentDate.getMonth() === today.getMonth() && this.currentDate.getFullYear() === today.getFullYear();
  }

  generateTimeSlots(start: string, end: string, interval: number): string[] {
    const startTime = new Date(`1970-01-01T${start}:00`);
    const endTime = new Date(`1970-01-01T${end}:00`);
    const times = [];
    while (startTime < endTime) {
      times.push(startTime.toTimeString().slice(0, 5));
      startTime.setMinutes(startTime.getMinutes() + interval);
    }
    return times;
  }

  fetchAvailableTimes(date: Date): void {
    const formattedDate = date.toISOString().split('T')[0];
    this.http.get<string[]>(`http://localhost:10102/citas/hour?date=${formattedDate}`).subscribe(
      (occupiedTimes) => {
        this.availableTimes = this.generateTimeSlots('07:00', '18:00', 30).filter(
          (time) => !occupiedTimes.includes(time)
        );
      },
      (error) => {
        console.error('Error fetching available times:', error);
      }
    );
  }

  onTimeSelected() {
    if (this.selectedDate && this.selectedTime) {
      this.dateSelected.emit({ date: this.selectedDate, time: this.selectedTime });
    }
  }
}
