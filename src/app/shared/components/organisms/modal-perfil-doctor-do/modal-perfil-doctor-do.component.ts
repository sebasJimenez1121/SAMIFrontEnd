import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { DoctorService } from '../../../../core/service/doctor.service';
import { Doctor } from '../../../../core/models/doctor.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-perfil-doctor-do',
  templateUrl: './modal-perfil-doctor-do.component.html',
  styleUrl: './modal-perfil-doctor-do.component.css'
})
export class ModalPerfilDoctorDoComponent implements OnInit {
  @Output() close = new EventEmitter<void>();

  doctorProfile: Doctor = {
    id: 0,
    tarjetaProf: '',
    documento: '',
    nombre: '',
    apellido: '',
    rol: '',
    email: '',
    estado: '',
    img: '',
    password: '',
    codigoEspc: '',
    specialtyId: 0,
    appointmentCost: 0,
    specialtyName: '',
    rating: 0
  };
  isEditing: boolean = false;
  confirmPassword: string = '';

  constructor(private docService: DoctorService) {}

  closeModal() {
    this.close.emit();
  }

  ngOnInit(): void {
    console.log('Modal initialized');
    this.loadProfile();
  }

  loadProfile() {
    const token = localStorage.getItem('token');
    const storedImage = localStorage.getItem('doctorProfileImage');
    if (storedImage) this.doctorProfile.img = storedImage;

    if (token) {
      this.docService.getDoctorByEmail(token).subscribe((response: Doctor) => {
        this.doctorProfile = response;
        if (!this.doctorProfile.img && storedImage) {
          this.doctorProfile.img = storedImage;
        }
      }, error => {
        console.error('Error al cargar el perfil del doctor', error);
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
            const MAX_WIDTH = 150;
            const scaleSize = MAX_WIDTH / img.width;
            canvas.width = MAX_WIDTH;
            canvas.height = img.height * scaleSize;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            this.doctorProfile.img = canvas.toDataURL('image/png').split(',')[1];
            localStorage.setItem('doctorProfileImage', this.doctorProfile.img);
          } else {
            console.error('No se pudo obtener el contexto del canvas');
          }
        };
      };
      reader.readAsDataURL(file);
    }
  }

  saveProfile() {
    if (this.doctorProfile.password !== this.confirmPassword) {
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
      this.docService.updateDocProfile(token, this.doctorProfile).subscribe(response => {
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
