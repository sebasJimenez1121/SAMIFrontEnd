import { Component, Input, OnInit } from '@angular/core';
import { DoctorPublic } from '../../../../core/models/doctor.model';
import { CalendarOptionsComponent } from '../../molecules/calendar-options/calendar-options.component';
import { AppointmentFormComponent } from '../../molecules/appointment-form/appointment-form.component';
import { ButtonPriceComponent } from '../../molecules/button-price/button-price.component';
// import { PatientListComponent } from '../../molecules/patient-list/patient-list.component'; // Componente nuevo
import { AuthService } from '../../../../core/service/auth-service.service'; // Asegúrate de tener la ruta correcta
import { PatientListComponent } from '../../organisms/patient-list/patient-list.component';

@Component({
  selector: 'app-stepper-agendamiento',
  templateUrl: './stepper-agendamiento.component.html',
  styleUrls: ['./stepper-agendamiento.component.css']
})
export class StepperAgendamientoComponent implements OnInit {
  @Input() doctor!: DoctorPublic;
  
  steps: { label: string, component: any, data?: any }[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    if (this.authService.isAdmin()) {
      // Configuración del stepper para administradores
      this.steps = [
        {
          label: 'Seleccionar Paciente',
          component: PatientListComponent, // Nuevo componente que muestra la tabla de pacientes
        },
        {
          label: 'Fecha y Día',
          component: CalendarOptionsComponent,
          data: { doctor: this.doctor }
        },
        {
          label: 'Información Paciente',
          component: AppointmentFormComponent,
          data: { additionalInfo: 'Info del paciente' }
        },
        {
          label: 'Método de Pago',
          component: ButtonPriceComponent,
          data: { confirmationData: 'Datos de confirmación' }
        },
        {
          label: 'Resumen Cita',
          component: ButtonPriceComponent,
          data: { confirmationData: 'Datos de confirmación' }
        },
      ];
    } else if (this.authService.isPatient()) {
      // Configuración del stepper para pacientes
      this.steps = [
        {
          label: 'Fecha y Día',
          component: CalendarOptionsComponent,
          data: { doctor: this.doctor }
        },
        {
          label: 'Información Paciente',
          component: AppointmentFormComponent,
          data: { additionalInfo: 'Info del paciente' }
        },
        {
          label: 'Método de Pago',
          component: ButtonPriceComponent,
          data: { confirmationData: 'Datos de confirmación' }
        },
        {
          label: 'Resumen Cita',
          component: ButtonPriceComponent,
          data: { confirmationData: 'Datos de confirmación' }
        },
      ];
    }
  }
}
