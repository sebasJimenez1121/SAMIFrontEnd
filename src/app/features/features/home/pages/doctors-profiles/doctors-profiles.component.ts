import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  selector: 'app-doctors-profiles',
  templateUrl: './doctors-profiles.component.html',
  styleUrls: ['./doctors-profiles.component.css']
})
export class DoctorsProfilesComponent implements OnInit {
  codigoEspc: string | null = null;
  allDoctors: DoctorPublic[] = [];
  itemsPerPage = 9;
  showModal = false;
  selectedDoctor!: DoctorPublic;
  paciente!: Patient;
  @Input() rol: string = "";
  @Input() paginatedDoctors: DoctorPublic[] = [];
  @Input() currentPage = 1;
  @Input() totalPages = 0;
  @Input() specialties: Specialty[] = [];
  @Output() specialtyChange = new EventEmitter<string>();
  @Output() pageChange = new EventEmitter<number>();
  @Output() agendarCita = new EventEmitter<DoctorPublic>();

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
      console.log('Especialidades:', this.specialties);
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
    this.specialtyChange.emit(codigoEspc);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.applyFilters();
    this.pageChange.emit(page);
  }

  openModal(doctor: DoctorPublic): void {
    this.selectedDoctor = doctor;
    this.showModal = true;
    this.agendarCita.emit(doctor);
  }

  closeModal(): void {
    this.showModal = false;
  }

}
