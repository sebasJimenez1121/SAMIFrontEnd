

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Doctor, DoctorPublic } from '../../../../core/models/doctor.model';
import { Specialty } from '../../../../core/models/doctor.model';
import { SpecialtyService } from '../../../../core/service/Specialty.service';

@Component({
  selector: 'app-template-appoinment-schedule-admin',
  templateUrl: './template-appoinment-schedule-admin.component.html',
  styleUrl: './template-appoinment-schedule-admin.component.css'
})
export class TemplateAppoinmentScheduleAdminComponent  implements OnInit {
  @Input() paginatedDoctors: DoctorPublic[] = [];
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 0;
  @Output() specialtyChange = new EventEmitter<string>();
  @Output() pageChange = new EventEmitter<number>();
  @Output() agendarCita = new EventEmitter<DoctorPublic>();
  @Input() userRole: any = "";
  @Input() titleText: string = 'Agendamiento de Citas';
  @Input() titleClass: string = 'custom-title';
  
  @Input() specialties: Specialty[] = []; // Asegúrate de que esta propiedad está definida correctamente
  imageUrl: string | null = '';
  isProfileModalOpen = false;
  constructor(private specialtyService: SpecialtyService) {}

  ngOnInit(): void {
    this.loadSpecialties();
  }

  loadSpecialties(): void {
    this.specialtyService.getSpecialties().subscribe(
      (specialties) => {
        this.specialties = specialties;
      },
      (error) => {
        console.error('Error fetching specialties:', error);
      }
    );
  }

  onSpecialtyChange(event: any) {
    this.specialtyChange.emit(event.target.value);
  }

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }

 
  openProfileModal() {
    this.isProfileModalOpen = true;
  }
 

  openModal(doctor: DoctorPublic) {
    this.agendarCita.emit(doctor);
  }
}
