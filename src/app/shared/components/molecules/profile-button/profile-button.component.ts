import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrl: './profile-button.component.css'
})
export class ProfileButtonComponent {
  @Input() imageUrl: string | null = null;
  notifications: number[] = []; 

  onBadgeClick() {
    alert('Badge clicked!');
   
  }
}
