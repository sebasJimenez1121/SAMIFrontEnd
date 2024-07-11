import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() placeholder: string = '';
  @Input() class: string = '';
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() value: any = '';
  @Input() disabled: boolean = false;
  @Output() valueChange = new EventEmitter<any>();

  private onChange = (value: any) => {};
  private onTouched = () => {};

  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).type === 'checkbox' ? (event.target as HTMLInputElement).checked : (event.target as HTMLInputElement).value;
    this.value = inputValue;
    this.valueChange.emit(inputValue);
    this.onChange(inputValue);
    this.onTouched();
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
