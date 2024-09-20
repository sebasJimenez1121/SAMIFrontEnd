import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DoctorService } from '../../../../core/service/doctor.service'; // Inyecta el servicio
import { DoctorPublic } from '../../../../core/models/doctor.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-doctor',
  templateUrl: './modal-doctor.component.html',
  styleUrls: ['./modal-doctor.component.css']
})
export class ModalDoctorComponent {
  @Input() showModal: boolean = false;
  @Input() datos: DoctorPublic | null = null;
  @Output() closeModalEvent: EventEmitter<void> = new EventEmitter<void>();
 
  isEditMode: boolean = false;
  isViewMode: boolean = true; // Para manejar el modo de visualización
  private originalData: DoctorPublic | null = null; // Para clonar los datos originales

  constructor(private doctorService: DoctorService) {} // Inyecta DoctorService

  closeModal(): void {
    this.showModal = false;
    this.isEditMode = false;
    this.datos = this.originalData ? { ...this.originalData } : null; // Restablece los datos originales
    this.closeModalEvent.emit();
    this.isViewMode = true; // Volver al modo de visualización por defecto
  }

  
  
 
  saveChanges(): void {
    if (this.datos) {
      console.log(this.datos);
      this.datos.email="ana@gmail.com"
      // Llamada al servicio para actualizar el doctor
      this.doctorService.updateDoctor(this.datos).subscribe(
        () => {
          Swal.fire('Guardado', 'Los cambios han sido guardados', 'success');
          this.closeModal();
        },
        error => {
          console.error('Error al actualizar el médico', error);
          Swal.fire('Error', 'No se pudo actualizar el médico', 'error');
        }
      );
    }
    this.isEditMode = false;
    this.isViewMode = true; 
  }




  // Método para abrir en modo de edición
enableEditMode(): void {
  this.isEditMode = true;
  this.isViewMode = false; // Desactivar el modo de visualización
}






}


