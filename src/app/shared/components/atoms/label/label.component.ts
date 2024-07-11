import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent {
  @Input() content: string = '';
  @Input() for: string = '';
  @Input() typeContent: string = 'string';
}
