import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']  
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() placeholder: string = '';
  @Input() class: string = '';
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() value: string = '';
}



