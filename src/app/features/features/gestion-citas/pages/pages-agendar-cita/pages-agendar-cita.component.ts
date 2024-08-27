import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../../../core/service/doctor.service';
import { PacienteService } from '../../../../../core/service/paciente.service';
import { DoctorPublic } from '../../../../../core/models/doctor.model';
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
    this.obtenerEspecialidades();
    this.obtenerDoctores();
    this.authService.getUserRole().subscribe({
      next: (rol) => {
        console.log(rol);
        this.rol = rol;
      },
      error: (err) => {
        console.error('Error obteniendo el rol:', err);
      }
    });
  }

  obtenerEspecialidades() {
    this.specialtyService.getSpecialties().subscribe((especialidades: Specialty[]) => {
      this.specialties = especialidades;
    });
  }

  obtenerDoctores() {
    this.doctorService.getDoctors().subscribe((doctors: any) => {
      console.log('Raw response from getDoctors:', doctors); // Verifica el formato de los datos recibidos
      
      if (Array.isArray(doctors)) {
        this.allDoctors = doctors;
      } else if (doctors && Array.isArray(doctors.doctors)) {
        this.allDoctors = doctors.doctors;
      } else {
        console.error('Unexpected data format for doctors:', doctors);
      }
      this.aplicarFiltros();  // Aplica filtros iniciales
    });
  }

  aplicarFiltros() {
    let doctoresFiltrados = this.allDoctors;

    if (this.codigoEspc && this.codigoEspc.trim() !== "0") {
      doctoresFiltrados = doctoresFiltrados.filter(doctor => doctor.codigoEspc === this.codigoEspc);
    } 
    this.totalPages = Math.ceil(doctoresFiltrados.length / this.itemsPerPage);
    this.paginarDoctores(doctoresFiltrados);
    console.log('Doctores filtrados:', doctoresFiltrados);
  }

  paginarDoctores(doctores: DoctorPublic[]) {
    const indiceInicio = (this.currentPage - 1) * this.itemsPerPage;
    const indiceFin = this.currentPage * this.itemsPerPage;
    this.paginatedDoctors = doctores.slice(indiceInicio, indiceFin);
    console.log('Doctores paginados:', this.paginatedDoctors);
  }

  onSpecialtyChange(codigoEspc: string) {
    this.codigoEspc = codigoEspc;
    this.currentPage = 1;
    this.aplicarFiltros();
  }

  onPageChange(pagina: number) {
    this.currentPage = pagina;
    this.aplicarFiltros();
  }

  abrirModal(doctor: DoctorPublic): void {
    this.selectedDoctor = doctor;
    this.showModal = true;
  }

  cerrarModal(): void {
    this.showModal = false;
  }
}
