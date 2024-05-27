
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-display-avatar',
  templateUrl: './data-display-avatar.component.html',
  styleUrl: './data-display-avatar.component.css'
})
export class DataDisplayAvatarComponent  {
  @Input() imageUrl: string | null = null;
  @Input() size: number = 10;
  @Input() altText: string = 'User Avatar';
}
