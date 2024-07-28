import { Component, Output, EventEmitter } from '@angular/core';
import { Specialty } from '../../../../core/models/doctor.model';
import { SpecialtyService } from '../../../../core/service/Specialty.service';

@Component({
  selector: 'app-add-specialty',
  templateUrl: './add-specialty.component.html',
  styleUrls: ['./add-specialty.component.css']
})
export class AddSpecialtyComponent {
  specialty: Specialty = { Codigo_Espc: '', Nombre: '', Descripcion: '' };
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
    if (this.specialty.Nombre && this.specialty.Descripcion) {
      this.specialtyService.addSpecialty(this.specialty).subscribe(
        (newSpecialty) => {
          this.specialtyAdded.emit(newSpecialty);
          this.specialty = {  Codigo_Espc: '', Nombre: '', Descripcion: '' }; // Reset form
          this.closeModal();
        },
        (error) => {
          console.error('Error adding specialty:', error);
        }
      );
    }
  }
}
