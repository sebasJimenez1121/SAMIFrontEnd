import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../../core/service/doctor.service';
import { Doctor } from '../../../../core/models/doctor.model';


interface Specialty {
  id: number;
  name: string;
}

@Component({
  selector: 'app-template-appointment-schedule',
  templateUrl: './template-appointment-schedule.component.html',
  styleUrls: ['./template-appointment-schedule.component.css']
})
export class TemplateAppointmentScheduleComponent implements OnInit {
  specialties: Specialty[] = [];
  selectedSpecialtyId: number | null = null;
  doctors: Doctor[] = [];
  paginatedDoctors: Doctor[] = [];
  currentPage = 1;
  totalPages = 0;
  itemsPerPage = 9;

  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    this.fetchSpecialties();
    this.fetchDoctors();
    console.log(this.totalPages);
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
}

