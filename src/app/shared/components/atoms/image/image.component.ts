import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  @Input() imageUrl: string = ''; 
  
  @Input() linkUrl: string = '';  
  @Input() width: string = '100px'; 
  @Input() height: string = '100px'; 
  @Input() alt: string = 'image'; 
}