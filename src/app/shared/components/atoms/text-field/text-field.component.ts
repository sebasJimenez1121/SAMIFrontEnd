import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.css'
})
export class TextFieldComponent {
  @Input() placeholderText: string = 'Placeholder';
  @Input() underlineColor: string = '#007bff';
}
