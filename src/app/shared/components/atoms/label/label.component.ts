import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrl: './label.component.css'
})
export class LabelComponent {
  @Input() content: string = "Nombre*";
  @Input() typeContent: string = "string"; 
}

