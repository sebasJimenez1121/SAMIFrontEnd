import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../../../core/service/doctor.service';
import { PatientService } from '../../../../../core/service/paciente.service';
import { Doctor } from '../../../../../core/models/doctor.model';
import { Patient } from '../../../../../core/models/patient.model';

interface Specialty {
  id: number;
  name: string;
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

  constructor(
    private doctorService: DoctorService,
    private patientService: PatientService
  ) {}

  ngOnInit() {
    this.fetchSpecialties();
    this.fetchDoctors();
  }

  fetchSpecialties() {
    this.doctorService.getSpecialties().subscribe((specialties: Specialty[]) => {
      this.specialties = specialties;
      console.log('Specialties:', this.specialties); // Verifica en la consola si specialties se está cargando correctamente
    });
  }

  fetchDoctors() {
    this.doctorService.getDoctors().subscribe((doctors: Doctor[]) => {
      this.allDoctors = doctors;
      this.applyFilters();  // Aplica filtros iniciales
      console.log('All doctors:', this.allDoctors); // Verifica en la consola si allDoctors se está cargando correctamente
    });
  }

  applyFilters() {
    let filteredDoctors = this.allDoctors;

    if (this.selectedSpecialtyId !== null && this.selectedSpecialtyId !== 0) {
      filteredDoctors = filteredDoctors.filter(doctor => doctor.specialtyId === this.selectedSpecialtyId);
    }

    this.totalPages = Math.ceil(filteredDoctors.length / this.itemsPerPage);
    this.paginateDoctors(filteredDoctors);
    console.log('Filtered doctors:', filteredDoctors); // Verifica en la consola si filteredDoctors está siendo filtrado correctamente
  }

  paginateDoctors(doctors: Doctor[]) {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = this.currentPage * this.itemsPerPage;
    this.paginatedDoctors = doctors.slice(startIndex, endIndex);
    console.log('Paginated doctors:', this.paginatedDoctors); // Verifica en la consola si paginatedDoctors se está paginando correctamente
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

  onModalClosed(): void {
    // Aquí puedes reiniciar el estado necesario al cerrar el modal
  }

  getPacienteData(): void {
    this.patientService.getPatientById('1').subscribe((patient: Patient) => {
      this.paciente = patient;
    });
  }
}
