import { Router } from '@angular/router';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DoctorPublic } from '../../../../core/models/doctor.model';
import { Specialty } from '../../../../core/models/doctor.model';
import { SpecialtyService } from '../../../../core/service/Specialty.service';
import { DoctorService } from '../../../../core/service/doctor.service';

@Component({
  selector: 'app-template-appointment-schedule',
  templateUrl: './template-appointment-schedule.component.html',
  styleUrls: ['./template-appointment-schedule.component.css']
})
export class TemplateAppointmentScheduleComponent implements OnInit {
  @Input() paginatedDoctors: DoctorPublic[] = [];
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 0;
  @Output() specialtyChange = new EventEmitter<string>();
  @Output() pageChange = new EventEmitter<number>();
  @Output() agendarCita = new EventEmitter<DoctorPublic>();
  @Input() userRole: any = "";
  @Input() titleText: string = 'Agendamiento de Citas';
  @Input() titleClass: string = 'custom-title';
  
  @Input() specialties: Specialty[] = [];

  constructor(private doctorService: DoctorService, private router: Router, private specialtyService : SpecialtyService) {}

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

  redirectToSchedulePage(doctor: DoctorPublic) {
    this.doctorService.setDoctor(doctor);
    this.router.navigate(['/stepper-agendamiento']);
  }
}
