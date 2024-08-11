
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
  selector: 'app-agendar-cita-admin',
  templateUrl: './agendar-cita-admin.component.html',
  styleUrl: './agendar-cita-admin.component.css'
})
export class AgendarCitaAdminComponent  implements OnInit {

  codigoEspc: string | null = null;
  allDoctors: DoctorPublic[] = [];
  paginatedDoctors: DoctorPublic[] = [];
  currentPage = 1;
  totalPages = 0;
  itemsPerPage = 9;
  showModal = false;
  selectedDoctor!: DoctorPublic;
  paciente!: Patient;
  rol : any = "";
  specialties: Specialty[] = [];


  constructor(
    private doctorService: DoctorService,
    private patientService: PacienteService,
    private authService: AuthService,
    private specialtyService: SpecialtyService 
  ) {}

  ngOnInit() {
    this.fetchSpecialties();
    this.fetchDoctors();
    this.authService.getUserRole().subscribe({
      next: (role) => {
        console.log(role)
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
      console.log('Specialties:', this.specialties); // Verifica en la consola si specialties se está cargando correctamente
    });
  }

  fetchDoctors() {
    this.doctorService.getDoctors().subscribe((doctors: any) => {
      console.log('Raw response from getDoctors:', doctors); // Verifica el formato de los datos recibidos
      
      if (Array.isArray(doctors)) {
        this.allDoctors = doctors;
      } else if (doctors && Array.isArray(doctors.doctors)) {
        this.allDoctors = doctors.doctors;
      } else {
        console.error('Unexpected data format for doctors:', doctors);
      }
      this.applyFilters();  // Aplica filtros iniciales
    });
  }
  
  applyFilters() {
    let filteredDoctors = this.allDoctors;
  
    if (this.codigoEspc !== null && this.codigoEspc !== "") {
      filteredDoctors = filteredDoctors.filter(doctor => doctor.codigoEspc === this.codigoEspc);
    }
    this.totalPages = Math.ceil(filteredDoctors.length / this.itemsPerPage);
    this.paginateDoctors(filteredDoctors); 
  }

  paginateDoctors(doctors: DoctorPublic[]) {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = this.currentPage * this.itemsPerPage;
    this.paginatedDoctors = doctors.slice(startIndex, endIndex);
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
