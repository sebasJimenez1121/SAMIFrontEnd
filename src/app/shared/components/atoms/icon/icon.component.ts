import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  @Input() iconUrl: string = '../../../../../assets/icons/correo.svg'; // URL del ícono
  @Input() linkUrl: string = '../../../../../assets/icons/correo.svg'; // URL del enlace
  @Input() size: string = '24px'; // Tamaño del ícono
  @Input() alt: string = 'icon'; // Texto alternativo del ícono
}