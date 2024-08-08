import { Component, OnInit } from '@angular/core';
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
  selector: 'app-pages-agendar-cita',
  templateUrl: './pages-agendar-cita.component.html',
  styleUrls: ['./pages-agendar-cita.component.css']
})
export class PagesAgendarCitaComponent implements OnInit {
   specialties: Specialty[] = [];
  selectedSpecialtyId: number | null = null;
  allDoctors: Doctor[] = [];
  paginatedDoctors: Doctor[] = [];
  currentPage = 1;
  totalPages = 0;
  itemsPerPage = 9;
  showModal = false;
  selectedDoctor!: Doctor;
  paciente!: Patient;
  rol: string = "";

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
      console.log('Specialties:', this.specialties);
    });
  }

  fetchDoctors() {
    this.doctorService.getDoctors().subscribe((doctors: Doctor[]) => {
      this.allDoctors = doctors;
      this.applyFilters();
      console.log('All doctors:', this.allDoctors);
    });
  }

  applyFilters() {
    let filteredDoctors = this.allDoctors;

    if (this.selectedSpecialtyId !== null && this.selectedSpecialtyId !== 0) {
      filteredDoctors = filteredDoctors.filter(doctor => doctor.specialtyId === this.selectedSpecialtyId);
    }

    this.totalPages = Math.ceil(filteredDoctors.length / this.itemsPerPage);
    this.paginateDoctors(filteredDoctors);
    console.log('Filtered doctors:', filteredDoctors);
  }

  paginateDoctors(doctors: Doctor[]) {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = this.currentPage * this.itemsPerPage;
    this.paginatedDoctors = doctors.slice(startIndex, endIndex);
    console.log('Paginated doctors:', this.paginatedDoctors);
  }

  onSpecialtyChange(specialtyId: number) {
    this.selectedSpecialtyId = specialtyId;
    this.currentPage = 1;
    this.applyFilters();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.applyFilters();
  }

  openModal(doctor: Doctor): void {
    this.selectedDoctor = doctor;
    this.getPacienteData();
    this.showModal = true;
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
