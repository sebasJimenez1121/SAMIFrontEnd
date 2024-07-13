import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: '<img [src]="iconUrl" [alt]="alt" [style.width]="size">',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  @Input() iconUrl: string = ''; 
  @Input() size: string = '24px'; 
  @Input() alt: string = 'icon'; 
}
