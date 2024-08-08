import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent {
  @Input() content: string = ''; // Propiedad para recibir el contenido del label
  @Input() for: string = ''; // Atributo 'for' del label
  @Input() typeContent: string = 'string'; // Clase para el label
}
