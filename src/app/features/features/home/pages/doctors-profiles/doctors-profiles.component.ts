import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DoctorService } from '../../../../../core/service/doctor.service';
import { PacienteService } from '../../../../../core/service/paciente.service';
import { Doctor } from '../../../../../core/models/doctor.model';
import { Patient } from '../../../../../core/models/patient.model';
import { AuthService } from '../../../../../core/service/auth-service.service';

interface Specialty {
  Codigo_Espc: string;
  Nombre: string;
  Descripcion: string;
}

@Component({
  selector: 'app-doctors-profiles',
  templateUrl: './doctors-profiles.component.html',
  styleUrls: ['./doctors-profiles.component.css']
})
export class DoctorsProfilesComponent implements OnInit {
  selectedSpecialtyId: number | null = null;
  allDoctors: Doctor[] = [];
  itemsPerPage = 9;
  showModal = false;
  selectedDoctor!: Doctor;
  paciente!: Patient;
  @Input() rol: string = "";
  @Input() paginatedDoctors: Doctor[] = [];
  @Input() currentPage = 1;
  @Input() totalPages = 0;
  @Input() specialties: Specialty[] = [];
  @Output() specialtyChange = new EventEmitter<number>();
  @Output() pageChange = new EventEmitter<number>();
  @Output() agendarCita = new EventEmitter<Doctor>();

  constructor(
    private doctorService: DoctorService,
    private patientService: PacienteService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.fetchSpecialties();
    this.fetchDoctors();
    this.authService.getUserRole().subscribe({
      next: (role) => {
        console.log(role);
        this.rol = role;
      },
      error: (err) => {
        console.error('Error obteniendo el rol:', err);
      }
    });
  }

  fetchSpecialties() {
    this.doctorService.getSpecialties().subscribe((specialties: Specialty[]) => {
      this.specialties = specialties;
      console.log('Especialidades:', this.specialties);
    });
  }

  fetchDoctors() {
    this.doctorService.getDoctors().subscribe((doctors: Doctor[]) => {
      this.allDoctors = doctors;
      this.applyFilters();
      console.log('Todos los doctores:', this.allDoctors);
    });
  }

  applyFilters() {
    let filteredDoctors = this.allDoctors;

    if (this.selectedSpecialtyId !== null && this.selectedSpecialtyId !== 0) {
      filteredDoctors = filteredDoctors.filter(doctor => doctor.specialtyId === this.selectedSpecialtyId);
    }

    this.totalPages = Math.ceil(filteredDoctors.length / this.itemsPerPage);
    this.paginateDoctors(filteredDoctors);
    console.log('Doctores filtrados:', filteredDoctors);
  }

  paginateDoctors(doctors: Doctor[]) {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = this.currentPage * this.itemsPerPage;
    this.paginatedDoctors = doctors.slice(startIndex, endIndex);
    console.log('Doctores paginados:', this.paginatedDoctors);
  }

  onSpecialtyChange(specialtyId: number) {
    this.selectedSpecialtyId = specialtyId;
    this.currentPage = 1;
    this.applyFilters();
    this.specialtyChange.emit(specialtyId);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.applyFilters();
    this.pageChange.emit(page);
  }

  openModal(doctor: Doctor): void {
    this.selectedDoctor = doctor;
    this.getPacienteData();
    this.showModal = true;
    this.agendarCita.emit(doctor);
  }

  closeModal(): void {
    this.showModal = false;
  }

  getPacienteData(): void {
    this.patientService.getPatientById('1').subscribe((patient: Patient) => {
      this.paciente = patient;
    });
  }
}
