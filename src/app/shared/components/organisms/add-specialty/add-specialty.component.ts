import { Component, Output, EventEmitter } from '@angular/core';
import { Specialty } from '../../../../core/models/doctor.model';
import { SpecialtyService } from '../../../../core/service/Specialty.service';

@Component({
  selector: 'app-add-specialty',
  templateUrl: './add-specialty.component.html',
  styleUrls: ['./add-specialty.component.css']
})
export class AddSpecialtyComponent {
  specialty: Specialty = { codigoEspc: 0, nombre: '', descripcion: '' };
  @Output() specialtyAdded: EventEmitter<Specialty> = new EventEmitter();
  showModal: boolean = false;

  constructor(private specialtyService: SpecialtyService) {}

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSubmit(): void {
    if (this.specialty.nombre && this.specialty.descripcion) {
      this.specialtyService.addSpecialty(this.specialty).subscribe(
        (newSpecialty) => {
          this.specialtyAdded.emit(newSpecialty);
          this.specialty = { codigoEspc: 0, nombre: '', descripcion: '' }; // Reset form
          this.closeModal();
        },
        (error) => {
          console.error('Error adding specialty:', error);
        }
      );
    }
  }
}
