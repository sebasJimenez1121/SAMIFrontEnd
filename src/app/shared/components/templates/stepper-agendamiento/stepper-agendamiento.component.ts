import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DoctorPublic } from '../../../../core/models/doctor.model';
import { Patient } from '../../../../core/models/patient.model';
import { CalendarOptionsComponent } from '../../molecules/calendar-options/calendar-options.component';
import { AppointmentFormComponent } from '../../molecules/appointment-form/appointment-form.component';
import { ButtonPriceComponent } from '../../molecules/button-price/button-price.component';
import { VisualizarCitaComponent } from '../../molecules/visualizar-cita/visualizar-cita.component';

@Component({
  selector: 'app-stepper-agendamiento',
  templateUrl: './stepper-agendamiento.component.html',
  styleUrls: ['./stepper-agendamiento.component.css']
})
export class StepperAgendamientoComponent implements OnChanges {
  @Input() doctor!: DoctorPublic;
  @Input() patient!: Patient;
  steps: { label: string, component: any, data?: any }[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['doctor'] || changes['patient']) {
      if (this.doctor && this.patient) {
        console.log("stepper data paciente agendamiento:", this.patient, " doctor stepper agendamiento:", this.doctor);
        this.initializeSteps();
      }
    }
  }

  initializeSteps() {
    this.steps = [
      { label: 'Hora Y Fecha', component: CalendarOptionsComponent, data: { doctor: this.doctor, patient: this.patient } },
      { label: 'Datos Cita', component: AppointmentFormComponent, data: { patient: this.patient } },
      { label: 'Metodo De Pago', component: ButtonPriceComponent, data: { doctor: this.doctor, patient: this.patient } },
      { label: 'Confirmacion', component: VisualizarCitaComponent, data: { doctor: this.doctor, patient: this.patient } }
    ];
  
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 0);
  }
}
