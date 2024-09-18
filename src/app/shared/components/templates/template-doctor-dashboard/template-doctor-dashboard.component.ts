import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Appointment } from '../../../../core/models/appointment.model';
import { Specialty } from '../../../../core/models/doctor.model';
import { CitaService } from '../../../../core/service/cita.service';
import { AddSpecialtyComponent } from '../../organisms/add-specialty/add-specialty.component';
import { SpecialtyService } from '../../../../core/service/Specialty.service';
import { Subject } from 'rxjs';
import { CalendarEvent } from 'angular-calendar';

interface CustomCalendarEvent extends CalendarEvent {
  fechaCita?: string;
  namePaciente?: string;
}

@Component({
  selector: 'app-template-doctor-dashboard',
  templateUrl: './template-doctor-dashboard.component.html',
  styleUrl: './template-doctor-dashboard.component.css'
})
export class TemplateDoctorDashboardComponent implements OnInit {
  titleClass: string = 'white-title';
  titleText: string = 'Bienvenido Médico ';
  specialties: Specialty[] = [];
  @Input() viewDate: Date = new Date();
  @Input() events: CustomCalendarEvent[] = [];
  @Input() refresh: Subject<void> = new Subject<void>();
  @ViewChild(AddSpecialtyComponent) addSpecialtyModal!: AddSpecialtyComponent;

  constructor(private dataService: CitaService, private specialtyService: SpecialtyService) {}
  imageUrl: string | null = '';
  isProfileModalOpen = false;

  openProfileModal() {
    this.isProfileModalOpen = true;
  }

  closeProfileModal() {
    this.isProfileModalOpen = false;
  }
  ngOnInit(): void {
    this.loadSpecialties();
  }  

  loadSpecialties(): void {
    this.specialtyService.getSpecialties().subscribe(
      (specialties) => {
        this.specialties = specialties;        
        console.log(this.specialties); 
      },
      (error) => {
        console.error('Error fetching specialties:', error);
      }
    );
  }
}
