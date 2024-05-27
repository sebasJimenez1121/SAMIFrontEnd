import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-card-comments-doctors',
  templateUrl: './image-card-comments-doctors.component.html',
  styleUrl: './image-card-comments-doctors.component.css'
})
export class ImageCardCommentsDoctorsComponent {
  @Input() img:string='../../../../../assets/images/Link → doctor_1.png.png';
}
