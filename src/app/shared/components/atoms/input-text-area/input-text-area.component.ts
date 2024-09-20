
import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrl: './input-text-area.component.css'
})
export class InputTextAreaComponent{
  text: string = '';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  @Input() isSmall: boolean = false;  // Para cambiar el tamaño del textarea

  onInputChange(value: string): void {
    this.text = value;
    this.valueChange.emit(this.text); // Emitir el valor cuando cambia
  }
}
