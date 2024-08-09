import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Doctor } from '../../../../core/models/doctor.model';
import { Specialty } from '../../../../core/models/doctor.model';
import { SpecialtyService } from '../../../../core/service/Specialty.service';

@Component({
  selector: 'app-template-appointment-schedule',
  templateUrl: './template-appointment-schedule.component.html',
  styleUrls: ['./template-appointment-schedule.component.css']
})
export class TemplateAppointmentScheduleComponent implements OnInit {
  @Input() paginatedDoctors: Doctor[] = [];
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 0;
  @Output() specialtyChange = new EventEmitter<number>();
  @Output() pageChange = new EventEmitter<number>();
  @Output() agendarCita = new EventEmitter<Doctor>();
  @Input() userRole: any = "";
  @Input() titleText: string = 'Agendamiento de Citas';
  @Input() titleClass: string = 'custom-title';
  
  @Input() specialties: Specialty[] = []; // Asegúrate de que esta propiedad está definida correctamente

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
    this.specialtyChange.emit(+event.target.value);
  }

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }

  openModal(doctor: Doctor) {
    this.agendarCita.emit(doctor);
  }
}
