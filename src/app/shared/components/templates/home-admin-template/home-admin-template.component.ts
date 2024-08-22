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
  titleClass: string = 'white-title';
  titleText: string = 'Bienvenido Admin';
  specialties: Specialty[] = [];
  @ViewChild(AddSpecialtyComponent) addSpecialtyModal!: AddSpecialtyComponent;

  citasFiltradas: Appointment[] = [];
  constructor(private dataService: CitaService, private specialtyService: SpecialtyService) {}
  imageUrl: string | null = '';
  isProfileModalOpen = false;

  openProfileModal() {
    this.isProfileModalOpen = true;
  }

  closeProfileModal() {
    this.isProfileModalOpen = false;
  }
  ngOnInit(): void {
    this.loadSpecialties();
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
    this.addSpecialtyModal.openModal();
  }

  addSpecialty(newSpecialty: Specialty): void {
    this.specialtyService.addSpecialty(newSpecialty).subscribe((specialty: Specialty) => {
      this.specialties.push(specialty); 
    });
    this.loadSpecialties();
  }
}
