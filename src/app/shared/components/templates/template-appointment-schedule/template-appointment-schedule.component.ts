

import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../../core/service/doctor.service';

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
  currentPage = 1;
  totalPages = 0;
  doctors: any[] = [ ]; 

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
  
    this.doctorService.getDoctors(this.currentPage, this.selectedSpecialtyId ?? undefined).subscribe(response => {
      this.doctors = response.doctors;
      this.totalPages = Math.ceil(response.total / 10);
    });
  }

  onSpecialtyChange(event: any) {
    this.selectedSpecialtyId = +event.target.value;
    this.currentPage = 1;
    this.fetchDoctors();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.fetchDoctors();
  }
}
