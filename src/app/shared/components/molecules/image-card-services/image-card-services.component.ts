import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-card-services',
  templateUrl: './image-card-services.component.html',
  styleUrl: './image-card-services.component.css'
})
export class ImageCardServicesComponent {
    @Input() titulo:string = "agendar cita";
    @Input() img:string='../../../../../assets/images/Rectangle 15.png';
}
