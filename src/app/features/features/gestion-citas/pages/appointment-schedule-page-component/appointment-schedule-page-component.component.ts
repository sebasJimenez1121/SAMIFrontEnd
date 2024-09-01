import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorPublic } from '../../../../../core/models/doctor.model';

@Component({
  selector: 'app-appointment-schedule-page-component',
  templateUrl: './appointment-schedule-page-component.component.html',
  styleUrls: ['./appointment-schedule-page-component.component.css']
})
export class AppointmentSchedulePageComponentComponent implements OnInit {
  doctor!: DoctorPublic;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Intentamos recuperar el doctor del estado de la navegación
    this.route.paramMap.subscribe(() => {
      this.doctor = history.state.doctor || JSON.parse(localStorage.getItem('selectedDoctor')!);
      if (!this.doctor) {
        console.error('No se encontró el doctor.');
      }
    });
  }
}
