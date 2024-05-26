import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'] // Cambié 'styleUrl' a 'styleUrls'
})
export class TextComponent {
  @Input() content: string = "SAMI es un equipo de experimentados profesionales médicos";
  @Input() typeContent: string = "text"; // Cambié 'typeContent' a string y ajusté el nombre
}