import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../core/service/auth-service.service';
import { PacienteService } from '../../../../../core/service/paciente.service';
import { StepperService } from '../../../../../core/service/stepper.service';
import { StorageService } from '../../../../../core/service/storage.service';
import { DoctorPublic } from '../../../../../core/models/doctor.model';
import { Patient } from '../../../../../core/models/patient.model';

@Component({
  selector: 'app-appointment-schedule-page-component',
  templateUrl: './appointment-schedule-page-component.component.html',
  styleUrls: ['./appointment-schedule-page-component.component.css']
})
export class AppointmentSchedulePageComponentComponent implements OnInit {
  doctor!: DoctorPublic;
  patient!: Patient;
  userRole!: string;
  isDataReady: boolean = false;

  constructor(
    private authService: AuthService,
    private pacienteService: PacienteService,
    private stepperService: StepperService,
    private storageService: StorageService,
  ) {}

  async ngOnInit() {
    await this.loadUserRole();
    await this.loadDoctor();
    await this.loadUserData();
    this.isDataReady = true;
  }

  private loadUserRole(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.authService.getUserRole().subscribe(role => {
        this.userRole = role;
        resolve();
      });
    });
  }

  private loadDoctor(): Promise<void> {
    return new Promise<void>((resolve) => {
      const storedDoctor = this.storageService.getDecryptedItem('selectedDoctor');
      if (storedDoctor) {
        this.doctor = storedDoctor;
        resolve();
      } else {
        this.stepperService.getDoctor().subscribe(doctor => {
          this.doctor = doctor as DoctorPublic;
          resolve();
        });
      }
    });
  }

  private loadUserData(): Promise<void> {
    return new Promise<void>((resolve) => {
      if (this.userRole === 'paciente') {
        const storedPatient = this.storageService.getDecryptedItem('patientData');
        if (storedPatient) {
          this.patient = storedPatient;
          resolve();
        } else {
          this.pacienteService.getPatientById().subscribe(response => {
            this.patient = response.patient;
            resolve();
          });
        }
      } else if (this.userRole === 'admin') {
        const storedPatient = this.storageService.getDecryptedItem('selectedPatient');
        if (storedPatient) {
          this.patient = storedPatient;
          resolve();
        } else {
          this.stepperService.getPatient().subscribe(patient => {
            this.patient = patient as Patient;
            resolve();
          });
        }
      }
    });
  }
}
