import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-secundari',
  templateUrl: './title-secundari.component.html',
  styleUrl: './title-secundari.component.css'
})
export class TitleSecundariComponent {
  @Input() titleText: string = '';
}
