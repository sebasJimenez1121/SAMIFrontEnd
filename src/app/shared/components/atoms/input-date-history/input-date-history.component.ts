import { Component, ViewChild, Output, EventEmitter, forwardRef, ElementRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-date-history',
  templateUrl: './input-date-history.component.html',
  styleUrls: ['./input-date-history.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDateHistoryComponent),
      multi: true
    }
  ]
})
export class InputDateHistoryComponent implements ControlValueAccessor, AfterViewInit {
  @ViewChild('dateInput') dateInput!: ElementRef;
  @Output() change: EventEmitter<any> = new EventEmitter();

  selectedDate: string = this.getCurrentDate();
  onChange = (value: any) => {};
  onTouched = () => {};

  ngAfterViewInit() {
    // Now dateInput should be available
  }

  getCurrentDate(): string {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  }

  openCalendar(): void {
    this.dateInput.nativeElement.click();
  }

  onDateChange(event: any): void {
    const value = event.target.value;
    this.selectedDate = value;
    this.onChange(value);
    this.onTouched();
    this.change.emit(value);
  }

  // Implementación de ControlValueAccessor
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    // Se actualiza selectedDate con el valor recibido
    this.selectedDate = value;
  }

  setDisabledState(isDisabled: boolean): void {
    // Deshabilita o habilita el input según el valor de isDisabled
    if (this.dateInput) {
      this.dateInput.nativeElement.disabled = isDisabled;
    }
  }
}
