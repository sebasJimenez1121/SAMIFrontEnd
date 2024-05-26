import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  @Input() iconUrl: string = '../../../../../assets/icons/correo.svg'; 
  @Input() linkUrl: string = '../../../../../assets/icons/correo.svg';
  @Input() size: string = '24px'; 
  @Input() alt: string = 'icon'; 
}