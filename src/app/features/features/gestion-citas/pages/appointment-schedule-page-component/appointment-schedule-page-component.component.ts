import { DoctorService } from '../../../../../core/service/doctor.service';
import { DoctorPublic } from './../../../../../core/models/doctor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-schedule-page-component',
  templateUrl: './appointment-schedule-page-component.component.html',
  styleUrls: ['./appointment-schedule-page-component.component.css'] // Corregir `styleUrl` a `styleUrls`
})
export class AppointmentSchedulePageComponentComponent implements OnInit {
  selectedDoctor: any;

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.selectedDoctor = this.doctorService.getDoctor();
    if (!this.selectedDoctor) {
      console.error('No doctor data found');
    }
  }
}
