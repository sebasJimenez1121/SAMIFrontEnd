import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../../core/service/doctor.service';
import { DoctorPublic } from '../../../../core/models/doctor.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medical-table',
  templateUrl: './medical-table.component.html',
  styleUrls: ['./medical-table.component.css']
})
export class MedicalTableComponent implements OnInit {
  doctors: DoctorPublic[] = [];
  selectedDoctor: DoctorPublic | null = null;
  showModal: boolean = false;
  isEditMode: boolean = false; 

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.loadDoctors();
  }

 
  loadDoctors(): void {
    this.doctorService.getDoctors().subscribe(
      (doctors: any) => {
        if (Array.isArray(doctors)) {
          this.doctors = doctors;
        } else if (doctors && Array.isArray(doctors.doctors)) {
          this.doctors = doctors.doctors;
        }
      },
      error => {
        console.error('Error al cargar la lista de médicos', error);
      }
    );
  }


  openModal(doctor: DoctorPublic, isEditMode: boolean = false): void {
    this.selectedDoctor = { ...doctor }; 
    this.isEditMode = isEditMode;
    this.showModal = true;
  }

 
  closeModal(): void {
    this.showModal = false;
    this.selectedDoctor = null;
    this.isEditMode = false;
  }
  confirmDelete(tarjetaProf: string): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡El médico será desactivado!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, desactivar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteDoctor(tarjetaProf);
      }
    });
  }
  
  deleteDoctor(tarjetaProf: string): void {
    const doctor = this.doctors.find(d => d.tarjetaProf === tarjetaProf);
    if (doctor) {
      doctor.estado = 'Inactivo'; // Actualiza el estado del doctor
      this.doctorService.updateDoctor(doctor).subscribe(
        () => {
          this.loadDoctors(); // Refresca la lista de doctores
          Swal.fire('Desactivado', 'El médico ha sido desactivado', 'success');
        },
        error => {
          console.error('Error al desactivar el médico', error);
          Swal.fire('Error', 'No se pudo desactivar el médico', 'error');
        }
      );
    }
  }}