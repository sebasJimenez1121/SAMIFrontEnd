import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-register-template',
  templateUrl: './doctor-register-template.component.html',
  styleUrl: './doctor-register-template.component.css'
})
export class DoctorRegisterTemplateComponent {
  imageUrl: string | null = '';
  isProfileModalOpen = false;

  openProfileModal() {
    this.isProfileModalOpen = true;
  }
}
