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
  // Variables para almacenar la información necesaria
  specialties: Specialty[] = [];
  selectedSpecialtyId: number | null = null;
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
    // Cargar las especialidades y los doctores al iniciar la página
    this.fetchSpecialties();
    this.fetchDoctors();
  }

  // Métodos para obtener las especialidades y los doctores
  fetchSpecialties() {
    this.doctorService.getSpecialties().subscribe((specialties: Specialty[]) => {
      this.specialties = specialties;
    });
  }

  fetchDoctors() {
    this.doctorService.getDoctors().subscribe((doctors: Doctor[]) => {
      this.paginateDoctors(doctors);
    });
  }

  // Método para aplicar filtros de búsqueda
  applyFilters() {
    let filteredDoctors = this.paginatedDoctors;

    if (this.selectedSpecialtyId) {
      filteredDoctors = filteredDoctors.filter(doctor => doctor.specialtyId === this.selectedSpecialtyId);
    }
    this.totalPages = Math.ceil(filteredDoctors.length / this.itemsPerPage);

    this.paginateDoctors(filteredDoctors);
  }

  paginateDoctors(doctors: Doctor[]) {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = this.currentPage * this.itemsPerPage;
    this.paginatedDoctors = doctors.slice(startIndex, endIndex);
  }

  // Métodos para cambiar la especialidad y la página
  onSpecialtyChange(event: any) {
    this.selectedSpecialtyId = +event.target.value;
    this.currentPage = 1;
    this.applyFilters();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.applyFilters();
  }

  // Método para abrir el modal y obtener los datos del paciente
  openModal(doctor: Doctor): void {
    this.selectedDoctor = doctor;
    this.getPacienteData(); // Obtener los datos del paciente
    this.showModal = true;
  }
  
  // Método para cerrar el modal
  closeModal(): void {
    this.showModal = false;
  }

  // Método para reiniciar el stepper cuando se cierra el modal
  onModalClosed(): void {
    // Reiniciar el stepper aquí
  }

  // Método para obtener los datos del paciente
  getPacienteData(): void {
    this.patientService.getPatientById('1').subscribe((patient: Patient) => {
      this.paciente = patient;
    });
  }
}
