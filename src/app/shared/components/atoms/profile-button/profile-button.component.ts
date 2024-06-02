import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.css']
})
export class ProfileButtonComponent {
  userImageUrl: string | ArrayBuffer | null = null;

  constructor(private router: Router) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = e => this.userImageUrl = reader.result;
      reader.readAsDataURL(file);
    }
  }

  onAvatarClick(): void {
    this.router.navigate(['/profile']);
  }
}
