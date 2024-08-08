import { Component, Output, EventEmitter } from '@angular/core';
import { Specialty } from '../../../../core/models/doctor.model';
import { SpecialtyService } from '../../../../core/service/Specialty.service';
import Swal from 'sweetalert2';

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
          this.specialty = { Codigo_Espc: '', Nombre: '', Descripcion: '' }; 
          this.closeModal();
          this.showAlert('successAdd');
        },
        (error) => {
          if (error.status === 409) {
            this.showAlert('errorAddDuplicate');
          } else {
            this.showAlert('errorAdd');
          }
        }
      );
    }
  }

  showAlert(type: 'successAdd' | 'errorAdd' | 'errorAddDuplicate'): void {
    let alertConfig: any = {};
  
    switch (type) {
      case 'successAdd':
        alertConfig = {
          title: 'Especialidad Creada',
          text: 'La especialidad ha sido creada exitosamente.',
          icon: 'success',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          toast: true,
          position: 'top', 
          background:"#C6F0C2",
          iconColor:"#1C5314",
        };
        break;
      case 'errorAdd':
        alertConfig = {
        title: 'Error al Crear Especialidad',
        text: type === 'errorAdd' ? 'No se pudo crear la especialidad. Por favor, inténtelo nuevamente más tarde.' : 'Ya existe una especialidad con el mismo Código. Por favor, use un Código diferente.',
        icon: 'error',
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        toast: true,
        position: 'top', 
        background: "#FCECEA",
        iconColor: "#A32020",
        };
        break;
      case 'errorAddDuplicate':
        alertConfig = {
          title: 'Error al Crear Especialidad',
          text: 'Ya existe una especialidad con el mismo Código. Por favor, use un Código diferente.',
          icon: 'error',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          toast: true,
          position: 'top', 
          background: "#FCECEA",
          iconColor: "#A32020",
        };
        break;
      default:
        break;
    }
  
    Swal.fire(alertConfig);
  }
}
