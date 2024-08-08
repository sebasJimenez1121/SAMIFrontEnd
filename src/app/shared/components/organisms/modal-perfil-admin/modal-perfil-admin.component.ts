import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AdminService } from '../../../../core/service/admin.service';
import { Admin } from '../../../../core/models/admin.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-perfil-admin',
  templateUrl: './modal-perfil-admin.component.html',
  styleUrls: ['./modal-perfil-admin.component.css']
})
export class ModalPerfilAdminComponent implements OnInit {
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
    const storedImage = localStorage.getItem('adminProfileImage');
  
    if (storedImage) {
      this.adminProfile.Foto_Url = storedImage;
    }
  
    if (token) {
      this.adminService.getAdminByEmail(token).subscribe((response: Admin) => {
        this.adminProfile = response;
        if (!this.adminProfile.Foto_Url && storedImage) {
          this.adminProfile.Foto_Url = storedImage;
        }
      }, error => {
        console.error('Error al cargar el perfil del administrador', error);
      });
    }
  }

  enableEditing() {
    this.isEditing = true;
  }

  triggerFileInput() {
    if (this.isEditing) {
      const fileInput = document.getElementById('fileInput') as HTMLInputElement;
      fileInput.click();
    }
  }
  

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          if (ctx) {
            const MAX_WIDTH = 150; // Ajusta este valor según sea necesario
            const scaleSize = MAX_WIDTH / img.width;
            canvas.width = MAX_WIDTH;
            canvas.height = img.height * scaleSize;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            this.adminProfile.Foto_Url = canvas.toDataURL('image/png').split(',')[1]; // Obtener la parte base64 de la imagen
            localStorage.setItem('adminProfileImage', this.adminProfile.Foto_Url);
          } else {
            console.error('No se pudo obtener el contexto del canvas');
          }
        };
      };
      reader.readAsDataURL(file);
    }
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
