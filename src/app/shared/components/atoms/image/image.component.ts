import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  @Input() imageUrl: string = ''; // URL de la imagen
  @Input() linkUrl: string = '';  // URL del enlace (opcional)
  @Input() width: string = '100px'; // Ancho de la imagen
  @Input() height: string = '100px'; // Altura de la imagen
  @Input() alt: string = 'image';   // Texto alternativo de la imagen
}