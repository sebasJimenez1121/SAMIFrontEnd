import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-display-avatar',
  templateUrl: './data-display-avatar.component.html',
  styleUrls: ['./data-display-avatar.component.css']
})
export class DataDisplayAvatarComponent {
  @Input() imageUrl: string | ArrayBuffer | null = null;
  @Input() size: number = 40;
  @Input() altText: string = 'User Avatar';
  @Output() avatarClick = new EventEmitter<void>();

  onClick(): void {
    this.avatarClick.emit();
  }
}
