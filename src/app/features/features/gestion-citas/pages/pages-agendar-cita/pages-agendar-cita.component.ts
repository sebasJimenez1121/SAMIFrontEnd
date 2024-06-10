import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../../../core/service/doctor.service';
import { Doctor } from '../../../../../core/models/doctor.model';
import { Patient } from '../../../../../core/models/patient.model';

interface Specialty {
  id: number;
  name: string;
}
@Component({
  selector: 'app-pages-agendar-cita',
  templateUrl: './pages-agendar-cita.component.html',
  styleUrl: './pages-agendar-cita.component.css'
})
export class PagesAgendarCitaComponent implements OnInit {
  specialties: Specialty[] = [];
  selectedSpecialtyId: number | null = null;
  doctors: Doctor[] = [];
  paginatedDoctors: Doctor[] = [];
  currentPage = 1;
  totalPages = 0;
  itemsPerPage = 9;
  showModal = false;
  selectedDoctor: Doctor | null = null; 
  paciente: Patient | null = null; 

  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    this.fetchSpecialties();
    this.fetchDoctors();
  }

  fetchSpecialties() {
    this.doctorService.getSpecialties().subscribe((specialties: Specialty[]) => {
      this.specialties = specialties;
    });
  }

  fetchDoctors() {
    this.doctorService.getDoctors().subscribe((doctors: Doctor[]) => {
      this.doctors = doctors;
      this.applyFilters();
    });
  }

  applyFilters() {
    let filteredDoctors = this.doctors;

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

  onSpecialtyChange(event: any) {
    this.selectedSpecialtyId = +event.target.value;
    this.currentPage = 1;
    this.applyFilters();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.applyFilters();
  }

  openModal(doctor: Doctor): void {
    this.selectedDoctor = doctor; // Almacena el médico seleccionado
    this.getPacienteData(); // Obtiene los datos del paciente
    this.showModal = true;

  }

  closeModal(): void {
    this.showModal = false;
  }

  // Método para obtener los datos del paciente (simulado)
  getPacienteData(): void {
    // Lógica para obtener los datos del paciente desde el servicio
    // Por ahora, simularemos datos ficticios
    /* this.paciente = {
      id: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
      documento: '12345678',
      email: 'juan@example.com',
      telefono: '123456789',
      // Agrega más campos si es necesario
    }; */
  }
}
