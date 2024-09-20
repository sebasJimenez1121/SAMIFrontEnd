import { Component, OnInit, ViewChild } from '@angular/core';
import { Appointment } from '../../../../core/models/appointment.model';
import { Specialty } from '../../../../core/models/doctor.model';
import { CitaService } from '../../../../core/service/cita.service';
import { SpecialtyService } from '../../../../core/service/Specialty.service';
import { SelectSpecialtiesModalComponent } from '../../organisms/select-specialties-modal/select-specialties-modal.component';

@Component({
  selector: 'app-home-admin-template',
  templateUrl: './home-admin-template.component.html',
  styleUrls: ['./home-admin-template.component.css']
})
export class HomeAdminTemplateComponent implements OnInit {
  titleClass: string = 'white-title';
  titleText: string = 'Bienvenido Admin';
  specialties: Specialty[] = [];
  
  @ViewChild(SelectSpecialtiesModalComponent) SelectSpecialtiesModal!: SelectSpecialtiesModalComponent;
  citasFiltradas: Appointment[] = [];
  imageUrl: string | null = '';
  isProfileModalOpen = false;
  isSelectSpecialtiesModalOpen = false;

  constructor(private dataService: CitaService, private specialtyService: SpecialtyService) {}

  ngOnInit(): void {
    this.loadSpecialties();
  }

  openProfileModal() {
    this.isProfileModalOpen = true;
  }

  closeProfileModal() {
    this.isProfileModalOpen = false;
  }

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

  openAddSpecialtyModal(): void {
    this.isSelectSpecialtiesModalOpen = true;
    this.SelectSpecialtiesModal.openModal();
  }

  activateSpecialties(specialties: Specialty[]): void {
    specialties.forEach(specialty => {
      this.specialtyService.activateSpecialty(specialty.Codigo_Espc).subscribe(() => {
        console.log('Specialty activated:', specialty.Codigo_Espc);
        this.loadSpecialties();
      });
    });
  }

  closeSelectSpecialtiesModal() {
    this.isSelectSpecialtiesModalOpen = false;
  }
}
