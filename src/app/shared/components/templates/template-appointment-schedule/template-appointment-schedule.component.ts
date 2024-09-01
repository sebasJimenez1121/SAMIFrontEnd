import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorPublic, Specialty } from '../../../../core/models/doctor.model';
import { SpecialtyService } from '../../../../core/service/Specialty.service';
import { DoctorService } from '../../../../core/service/doctor.service';
import { AuthService } from '../../../../core/service/auth-service.service'; 

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
  @Input() titleText: string = 'Agendamiento de Citas';
  @Input() titleClass: string = 'custom-title';
  @Input() specialties: Specialty[] = [];

  // Aquí almacenaremos el rol del usuario
  public userRole: string = '';

  constructor(
    private doctorService: DoctorService, 
    private router: Router, 
    private specialtyService: SpecialtyService,
    private authService: AuthService // Inyecta AuthService
  ) {}

  ngOnInit(): void {
    this.loadUserRole();
    this.loadSpecialties();
  }

  loadUserRole(): void {
    this.authService.getUserRole().subscribe(
      (role: string) => {
        this.userRole = role;
      },
      (error: any) => {
        console.error('Error obteniendo el rol del usuario:', error);
      }
    );
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
    localStorage.setItem('selectedDoctor', JSON.stringify(doctor));
    this.router.navigate(['/stepper-agendamiento'], { state: { doctor } });
  }
}
