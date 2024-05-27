import { Component } from '@angular/core';

const valorCita = 45000

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.css'
})
export class ContentCardComponent {
    nombre :string = "Don jesus";
    valor : string = `el valor de cita: $${valorCita}`
}
