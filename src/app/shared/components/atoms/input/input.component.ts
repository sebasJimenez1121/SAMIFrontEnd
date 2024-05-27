import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']  // Asegúrate de que sea styleUrls
})
export class InputComponent {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() name: string = '';
  
  inputValue: string = '';

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
  }

  onFocus(): void {
    console.log('Input focused');
  }
}