import { Component, Output, Input, EventEmitter } from '@angular/core';
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
export class TemplateAppointmentScheduleComponent {
  @Input() specialties: Specialty[] = [];
  @Input() paginatedDoctors: Doctor[] = [];
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 0;
  @Output() specialtyChange = new EventEmitter<number>();
  @Output() pageChange = new EventEmitter<number>();
  @Output() agendarCita = new EventEmitter<Doctor>();

  onSpecialtyChange(event: any) {
    this.specialtyChange.emit(+event.target.value);
  }

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }

  agendarCitaHandler(doctor: Doctor) {
    this.agendarCita.emit(doctor);
  }
}
