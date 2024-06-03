import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'] 
})
export class TextComponent {
  @Input() content: string = "SAMI es un equipo de experimentados profesionales médicos";
  @Input() typeContent: string = "text"; 
  @Input() class: string = "nueva";
}