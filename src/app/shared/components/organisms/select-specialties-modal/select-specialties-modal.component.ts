import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Specialty } from '../../../../core/models/doctor.model';

@Component({
  selector: 'app-select-specialties-modal',
  templateUrl: './select-specialties-modal.component.html',
  styleUrls: ['./select-specialties-modal.component.css']
})
export class SelectSpecialtiesModalComponent {
  @Input() specialties: Specialty[] = [];
  @Output() specialtiesSelected: EventEmitter<Specialty[]> = new EventEmitter<Specialty[]>();
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  showModal: boolean = false;
  selectedSpecialties: Specialty[] = [];

  // Método para abrir el modal
  openModal(): void {
    this.showModal = true;
  }

  // Método para cerrar el modal
  closeModal(): void {
    this.showModal = false;
    this.selectedSpecialties = [];  // Limpiar selección al cerrar modal
    this.close.emit();  // Emitir evento para indicar cierre
  }

  // Alternar la selección de especialidades y emitir inmediatamente
  toggleSelection(specialty: Specialty): void {
    const index = this.selectedSpecialties.findIndex(item => item.Codigo_Espc === specialty.Codigo_Espc);
    if (index === -1) {
      this.selectedSpecialties.push(specialty);  // Agregar especialidad si no está seleccionada
    } else {
      this.selectedSpecialties.splice(index, 1);  // Remover especialidad si está seleccionada
    }
    this.specialtiesSelected.emit(this.selectedSpecialties);  // Emitir especialidades seleccionadas
  }
}
