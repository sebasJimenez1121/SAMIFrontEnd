import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-principal',
  templateUrl: './title-principal.component.html',
  styleUrl: './title-principal.component.css'
})
export class TitlePrincipalComponent {
  @Input() titleText: string = 'Registro';
}
