
import { Component } from '@angular/core';

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrl: './input-text-area.component.css'
})
export class InputTextAreaComponent{
  text: string = '';

  constructor() { }
}
