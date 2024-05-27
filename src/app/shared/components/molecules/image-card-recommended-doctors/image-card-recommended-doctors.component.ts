import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-card-recommended-doctors',
  templateUrl: './image-card-recommended-doctors.component.html',
  styleUrl: './image-card-recommended-doctors.component.css'
})
export class ImageCardRecommendedDoctorsComponent {
  @Input() img:string='../../../../../assets/images/Link → doctor_1.png.png';
}
