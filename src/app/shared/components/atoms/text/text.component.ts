import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'] 
})
export class TextComponent {
  @Input() typeContent: string = "text";
  @Input() class: string = "nueva";
  @Input() content: string = '';
  @Input() width: string = '';
}