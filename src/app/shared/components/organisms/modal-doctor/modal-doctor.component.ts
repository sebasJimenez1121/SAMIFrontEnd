import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DoctorPublic } from '../../../../core/models/doctor.model';
import Swal from 'sweetalert2'; // Asegúrate de que sweetalert2 esté instalado

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

  // Método para cerrar el modal
  closeModal(): void {
    this.showModal = false;
    this.isEditMode = false; // Reset edit mode when closing
    this.closeModalEvent.emit();
  }

  // Método para habilitar el modo de edición
  enableEditMode(): void {
    this.isEditMode = true;
  }

  // Método para guardar los cambios
  saveChanges(): void {
    if (this.datos) {
      // Aquí debes llamar al servicio para actualizar el doctor
      // Asegúrate de que el servicio esté inyectado en el componente

      // Simulando una llamada de servicio
      setTimeout(() => {
        Swal.fire('Guardado', 'Los cambios han sido guardados', 'success');
        this.closeModal();
      }, 1000);
    }
  }
}
