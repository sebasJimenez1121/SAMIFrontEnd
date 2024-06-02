

import { Component, OnInit } from '@angular/core';
import { DoctorService, Doctor } from './core/service/doctor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  doctors: Doctor[] = [];
  specialties: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    this.loadSpecialties();
    this.loadDoctors();
  }

  loadSpecialties() {
    this.doctorService.getSpecialties().subscribe(data => {
      this.specialties = data;
    });
  }

  loadDoctors() {
    this.doctorService.getDoctors(this.currentPage).subscribe(data => {
      this.doctors = data.doctors;
      this.totalPages = Math.ceil(data.total / 10);
    });
  }

  onSpecialtyChange(event: any) {
    const selectedSpecialtyId = parseInt(event.target.value, 10);
    this.doctorService.getDoctors(this.currentPage, selectedSpecialtyId).subscribe(data => {
      this.doctors = data.doctors;
      this.totalPages = Math.ceil(data.total / 10);
    });
  }

  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.loadDoctors();
  }
}
