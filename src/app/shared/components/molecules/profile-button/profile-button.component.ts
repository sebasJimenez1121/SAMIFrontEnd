import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DoctorPublic } from '../../../../core/models/doctor.model';
import { Admin } from '../../../../core/models/admin.model';
import { Patient } from '../../../../core/models/patient.model';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.css']
})
export class ProfileButtonComponent implements OnInit {
  @Input() profile: Admin | DoctorPublic | Patient | null = null;
  @Input() imageUrl: string | null = null; 
  @Input() size: number = 40;
  @Input() altText: string = 'User Avatar';
  @Output() avatarClick = new EventEmitter<void>();
  notifications: number[] = [];

  defaultImageUrl: string = 'https://leman-clinic.ch/wp-content/uploads/2018/11/02.jpg';
 

  ngOnInit() {
    if (this.profile) {
      if ('Foto_Url' in this.profile) {
        this.imageUrl = this.profile.Foto_Url || this.defaultImageUrl;
      } else if ('imgUrl' in this.profile) {
        this.imageUrl = this.profile.imgUrl || this.defaultImageUrl;
      } else {
        this.imageUrl = this.defaultImageUrl;
      }
    } else {
      this.imageUrl = this.defaultImageUrl;
    }
  }
  onBadgeClick() {
    alert('Badge clicked!');
  }

  onAvatarClick() {
    this.avatarClick.emit();
  }
}
