import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorPublic, Specialty } from '../../../../core/models/doctor.model';
import { SpecialtyService } from '../../../../core/service/Specialty.service';
import { DoctorService } from '../../../../core/service/doctor.service';
import { AuthService } from '../../../../core/service/auth-service.service';
import { StepperService } from '../../../../core/service/stepper.service';
import { PacienteService } from '../../../../core/service/paciente.service';
import { StorageService } from '../../../../core/service/storage.service';
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
  public selectedPatient!: Patient;

  constructor(
    private doctorService: DoctorService, 
    private router: Router, 
    private specialtyService: SpecialtyService,
    private authService: AuthService,
    private stepperService: StepperService,
    private pacienteService: PacienteService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.loadUserRole();
    this.loadSpecialties();
  }

  // Cargar el rol del usuario y verificar si es paciente
  loadUserRole(): void {
    this.authService.getUserRole().subscribe(
      (role: string) => {
        this.userRole = role;
        this.storageService.setEncryptedItem('userRole', role);

        if (role === 'paciente') {
          this.loadPatientData(); // Cargar datos del paciente si el rol es paciente
        }
      },
      (error: any) => {
        console.error('Error obteniendo el rol del usuario:', error);
      }
    );
  }

  // Cargar especialidades
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

  // Cargar los datos del paciente
  loadPatientData(): void {
    this.pacienteService.getPatientById().subscribe(
      (response: { patient: Patient }) => {
        this.selectedPatient = response.patient;
        this.storageService.setEncryptedItem('patientData', response.patient);
      },
      (error) => {
        console.error('Error obteniendo la información del paciente:', error);
      }
    );
  }

  // Cambiar especialidad
  onSpecialtyChange(event: any) {
    this.specialtyChange.emit(event.target.value);
  }

  // Cambiar página de los doctores
  onPageChange(page: number) {
    this.pageChange.emit(page);
  }

  // Seleccionar doctor
  onDoctorSelected(doctor: DoctorPublic) {
    this.selectedDoctor = doctor;
    this.storageService.setEncryptedItem('selectedDoctor', doctor);
  
    if (this.userRole === 'admin') {
      // Para el rol admin, seleccionar al paciente también
      this.onPatientSelected(this.selectedPatient);  // Asegura pasar el paciente seleccionado
    } else if (this.userRole === 'paciente') {
      // Si es paciente, asegúrate de que se cargue el paciente antes de redirigir
      this.loadPatientDataForRedirect(doctor);
    }
  }
  
  // Método para cargar datos del paciente y redirigir
  loadPatientDataForRedirect(doctor: DoctorPublic): void {
    if (this.selectedPatient) {
      // Si el paciente ya está cargado
      this.redirectToSchedulePage(doctor);
    } else {
      // Si no está cargado, obtén los datos y luego redirige
      this.pacienteService.getPatientById().subscribe(
        (response: { patient: Patient }) => {
          this.selectedPatient = response.patient;
          this.storageService.setEncryptedItem('patientData', response.patient);
  
          // Ahora que se cargaron los datos del paciente, redirige
          this.redirectToSchedulePage(doctor);
        },
        (error) => {
          console.error('Error obteniendo la información del paciente:', error);
        }
      );
    }
  }
  
  // Seleccionar paciente (solo para el rol admin)
  onPatientSelected(patient: any) {
    if (this.selectedDoctor && patient) {
      this.stepperService.setDoctor(this.selectedDoctor);
      this.stepperService.setPatient(patient);
      this.storageService.setEncryptedItem('selectedPatient', patient);

      // Redirigir al stepper
      this.router.navigate(['/stepper-agendamiento']);
    }
  }

  redirectToSchedulePage(doctor: DoctorPublic) {
    this.stepperService.setDoctor(doctor);
    this.stepperService.setPatient(this.selectedPatient);  // Asegura pasar el paciente
    this.router.navigate(['/stepper-agendamiento']);
  }

}
