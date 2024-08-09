import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.css']
})
export class ProfileButtonComponent {
  @Input() imageUrl: string | null = null;
  @Output() avatarClick = new EventEmitter<void>();

  notifications: number[] = []; 

  onBadgeClick() {
    alert('Badge clicked!');
  }

  onAvatarClick() {
    this.avatarClick.emit();
  }
}
