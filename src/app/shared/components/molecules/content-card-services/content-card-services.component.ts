import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-card-services',
  templateUrl: './content-card-services.component.html',
  styleUrl: './content-card-services.component.css'
})
export class ContentCardServicesComponent {
    @Input() descripcion:string = "agende una cita con alguno de los medicos registrados en el aplicativo";
}
