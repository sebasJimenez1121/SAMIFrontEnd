import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css'
})
export class ImageCardComponent {
  @Input() img:string='../../../../../assets/images/Link → doctor_1.png.png';
  @Input() especialidad:string="Odontologia";
  
}
