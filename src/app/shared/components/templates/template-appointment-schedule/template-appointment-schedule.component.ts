import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorPublic, Specialty } from '../../../../core/models/doctor.model';
import { SpecialtyService } from '../../../../core/service/Specialty.service';
import { DoctorService } from '../../../../core/service/doctor.service';
import { AuthService } from '../../../../core/service/auth-service.service';
import { PacienteService } from '../../../../core/service/paciente.service';
import { Patient } from '../../../../core/models/patient.model';

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
  @Input() titleText: string = 'Agendamiento de Citas';
  @Input() titleClass: string = 'custom-title';
  @Input() specialties: Specialty[] = [];

  public userRole: string = '';
  public selectedDoctor!: DoctorPublic;
  public Patient!: Patient;
  
  public isModalVisible: boolean = false;  // Controla la visibilidad del modal

  constructor(
    private doctorService: DoctorService,
    private router: Router,
    private specialtyService: SpecialtyService,
    private authService: AuthService,
    private pacienteService: PacienteService,
  ) {}

  ngOnInit(): void {
    this.loadUserRole();
    this.loadSpecialties();
  }
  
  loadUserRole(): void {
    this.authService.getUserRole().subscribe(
      (role: string) => {
        this.userRole = role;
        if (role === 'paciente') {
          this.loadPatientData();  // Cargar datos del paciente desde el token
        }
      },
      (error: any) => console.error('Error obteniendo el rol del usuario:', error)
    );
  }

  loadSpecialties(): void {
    this.specialtyService.getSpecialties().subscribe(
      (specialties) => this.specialties = specialties,
      (error) => console.error('Error fetching specialties:', error)
    );
  }

  loadPatientData(): void {
      this.pacienteService.getPatientById().subscribe(
        (response) => {
          this.Patient = response.patient;  // Asignar los datos del paciente obtenidos
        },
        (error) => {
          console.error('Error al obtener los datos del paciente:', error);
        }
      );
    }  

  onSpecialtyChange(event: any) {
    this.specialtyChange.emit(event.target.value);
  }

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }

  onDoctorSelected(doctor: DoctorPublic) {
    this.selectedDoctor = doctor;

    // Verificar si el paciente está seleccionado antes de abrir el modal
    if (this.userRole === 'paciente') {
      if (this.Patient) {
        this.openAppointmentModal(doctor, this.Patient);
      } else {
        console.error('No se puede abrir el modal: ID del paciente no disponible');
      }
    } else if (this.userRole === 'admin') {
      if (this.Patient) {
        this.openAppointmentModal(doctor, this.Patient);
      } else {
        console.error('No se puede abrir el modal: ID del paciente no disponible');
      }
    } else {
      console.error('No se puede abrir el modal: rol de usuario desconocido');
    }
  }

  openAppointmentModal(doctor: DoctorPublic, Patient: Patient): void {
    if (doctor && Patient) {
      this.selectedDoctor = doctor;
      this.Patient = Patient;
      this.isModalVisible = true;  // Asegura que el modal se abra
      console.log('Modal abierto con doctor:', doctor.nombre);
    } else {
      console.error('No se puede abrir el modal: faltan datos', { doctor, Patient });
    }
  }

  closeModal() {
    this.isModalVisible = false;  // Cierra el modal
    this.pageChange.emit(this.currentPage);  // Recarga los doctores
  }

  onPatientSelected(patient: Patient) {
    this.Patient = patient;
    if (this.selectedDoctor) {
      this.openAppointmentModal(this.selectedDoctor, patient);
    }
  }
}
