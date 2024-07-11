import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectsComponent),
    multi: true
  }]
})
export class SelectsComponent implements ControlValueAccessor {
  @Input() required: boolean = false;
  @Input() class: string = '';
  @Input() id: string = '';
  @Input() value: string = '';
  @Input() options: Array<{ value: string, label: string }> = [];

  private onChange = (value: string) => {};
  private onTouched = () => {};

  onDocumentTypeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.value = selectElement.value;
    this.onChange(this.value);
    this.onTouched();
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implementa la lógica para deshabilitar el select si es necesario
  }
}
