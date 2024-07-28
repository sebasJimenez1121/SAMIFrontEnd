import { Component, Output, EventEmitter } from '@angular/core';
import { AdminService } from '../../../../core/service/admin.service';
import { Admin } from '../../../../core/models/admin.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-perfil-admin',
  templateUrl: './modal-perfil-admin.component.html',
  styleUrls: ['./modal-perfil-admin.component.css']
})
export class ModalPerfilAdminComponent {
  @Output() close = new EventEmitter<void>();

  adminProfile: Admin = {};
  isEditing: boolean = false;
  confirmPassword: string = '';

  constructor(private adminService: AdminService) {}

  closeModal() {
    this.close.emit();
  }

  ngOnInit(): void {
    this.loadProfileAdmin();
  }

  loadProfileAdmin() {
    const token = localStorage.getItem('token');
    if (token) {
      this.adminService.getAdminByEmail(token).subscribe((response: Admin) => {
        this.adminProfile = response;
        console.log(this.adminProfile);
      }, error => {
        console.error('Error al cargar el perfil del administrador', error);
      });
    }
  }

  enableEditing() {
    this.isEditing = true;
  }

  saveProfile() {
    if (this.adminProfile.Password !== this.confirmPassword) {
      Swal.fire({
        title: 'Error',
        text: 'Las contraseñas no coinciden',
        icon: 'error',
        showConfirmButton: true
      });
      return;
    }

    const token = localStorage.getItem('token');
    if (token) {
      this.adminService.updateAdminProfile(token, this.adminProfile).subscribe(response => {
        this.isEditing = false;
        Swal.fire({
          title: 'Perfil actualizado',
          text: 'Perfil actualizado exitosamente.',
          icon: 'success',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          toast: true,
          position: 'top',
          background: "#C6F0C2",
          iconColor: "#1C5314",
        });
      }, error => {
        console.error('Error actualizando el perfil', error);
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al actualizar el perfil',
          icon: 'error',
          showConfirmButton: true
        });
      });
    }
  }
}
