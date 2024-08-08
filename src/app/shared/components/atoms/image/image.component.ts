import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  @Input() imageUrl: string | undefined;
  @Input() src:string='';
  @Input() linkUrl: string = '';  
  @Input() width: string = ''; 
  @Input() height: string = ''; 
  @Input() alt: string = 'image'; 
  @Input() disabled: boolean = false;
}