import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-card-services',
  templateUrl: './content-card-services.component.html',
  styleUrl: './content-card-services.component.css'
})
export class ContentCardServicesComponent {
  @Input() titulo:string = "Agendar cita";
  @Input() descripcion:string = "Agende una cita con alguno de los médicos registrados en el aplicativo.";
  @Input() link:string = "/agendar-cita";
}
