
import { Component,Input,Output } from '@angular/core';

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrl: './input-text-area.component.css'
})
export class InputTextAreaComponent{
  text: string = '';
  @Input() value: string = '';
 

  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value = inputValue;
   
}
  constructor() { }
}
