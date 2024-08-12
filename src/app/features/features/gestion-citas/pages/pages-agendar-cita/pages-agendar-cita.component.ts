import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../../../core/service/doctor.service';
import { PacienteService } from '../../../../../core/service/paciente.service';
import { Doctor, DoctorPublic } from '../../../../../core/models/doctor.model';
import { Patient } from '../../../../../core/models/patient.model';
import { AuthService } from '../../../../../core/service/auth-service.service';
import { SpecialtyService } from '../../../../../core/service/Specialty.service';



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
  codigoEspc: string | null = null;
  allDoctors: DoctorPublic[] = [];
  paginatedDoctors: DoctorPublic[] = [];
  currentPage = 1;
  totalPages = 0;
  itemsPerPage = 9;
  showModal = false;
  selectedDoctor!: DoctorPublic;
  paciente!: Patient;
  rol: string = "";

  constructor(
    private doctorService: DoctorService,
    private authService: AuthService,
    private specialtyService: SpecialtyService 
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
    this.specialtyService.getSpecialties().subscribe((specialties: Specialty[]) => {
      this.specialties = specialties;
    });
  }

  fetchDoctors() {
  this.doctorService.getDoctors().subscribe((doctors: any) => { 
    if (Array.isArray(doctors)) {
      this.allDoctors = doctors;
    } else if (doctors && Array.isArray(doctors.doctors)) {
      this.allDoctors = doctors.doctors;
    } 
    this.applyFilters();  
  });
}

applyFilters() {
  let filteredDoctors = this.allDoctors;

  if (this.codigoEspc && this.codigoEspc.trim() !== "0") {
    filteredDoctors = filteredDoctors.filter(doctor => doctor.codigoEspc === this.codigoEspc);
  } 
  this.totalPages = Math.ceil(filteredDoctors.length / this.itemsPerPage);
  this.paginateDoctors(filteredDoctors);
  console.log('Doctores filtrados:', filteredDoctors);
}


  paginateDoctors(doctors: DoctorPublic[]) {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = this.currentPage * this.itemsPerPage;
    this.paginatedDoctors = doctors.slice(startIndex, endIndex);
    console.log('Paginated doctors:', this.paginatedDoctors);
  }

  onSpecialtyChange(codigoEspc: string) {
    this.codigoEspc = codigoEspc;
    this.currentPage = 1;
    this.applyFilters();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.applyFilters();
  }

  openModal(doctor: DoctorPublic): void {
    this.selectedDoctor = doctor;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

}
