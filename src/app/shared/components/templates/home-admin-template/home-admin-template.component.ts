import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Appointment } from '../../../../core/models/appointment.model';
import { Specialty } from '../../../../core/models/doctor.model';
import { CitaService } from '../../../../core/service/cita.service';
import { AddSpecialtyComponent } from '../../organisms/add-specialty/add-specialty.component';
import { SpecialtyService } from '../../../../core/service/Specialty.service';

@Component({
  selector: 'app-home-admin-template',
  templateUrl: './home-admin-template.component.html',
  styleUrls: ['./home-admin-template.component.css']
})
export class HomeAdminTemplateComponent implements OnInit {
  @Input() citas: Appointment[] = [];
  citasFiltradas: Appointment[] = [];
  specialties: Specialty[] = [];
  @ViewChild(AddSpecialtyComponent) addSpecialtyModal!: AddSpecialtyComponent;

  constructor(private dataService: CitaService, private specialtyService: SpecialtyService) {}
  imageUrl: string | null = 'path/to/admin-image.jpg'; // Define the image URL
  isProfileModalOpen = false;

  openProfileModal() {
    this.isProfileModalOpen = true;
  }

  closeProfileModal() {
    this.isProfileModalOpen = false;
  }
  ngOnInit(): void {
    //this.loadCitas();
    this.loadSpecialties();
  }

  // loadCitas(): void {
  //   this.dataService.getCitas().subscribe(
  //     (data: Appointment[]) => {
  //       this.citas = data;
  //       this.citasFiltradas = this.citas;
  //     },
  //     (error: any) => {
  //       console.error('Error loading citas:', error);
  //     }
  //   );
  // }

  loadSpecialties(): void {
    this.specialtyService.getSpecialties().subscribe(
      (specialties) => {
        this.specialties = specialties;        
        console.log(this.specialties);
        
      },
      (error) => {
        console.error('Error fetching specialties:', error);
      }
    );
  }
  obtenerClaseCirculo(estado: string): string {
    switch (estado) {
      case 'Agendada':
        return 'circulo-activo';
      case 'Cancelada':
        return 'circulo-inactivo';
      default:
        return '';
    }
  }

  traducirEstado(estado: string): string {
    switch (estado) {
      case 'Pendiente': return 'Pendiente';
      case 'Completado': return 'Completado';
      case 'Cancelado': return 'Cancelado';
      default: return estado;
    }
  }
  openAddSpecialtyModal(): void {
    this.addSpecialtyModal.openModal();
  }

  addSpecialty(newSpecialty: Specialty): void {
    this.specialties.push(newSpecialty);
  }
}
