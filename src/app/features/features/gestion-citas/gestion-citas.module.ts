import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionCitasRoutingModule } from './gestion-citas-routing.module';
import { PagesGestionCitasComponent } from './pages/pages-gestion-citas/pages-gestion-citas.component';
import { PagesAgendarCitaComponent } from './pages/pages-agendar-cita/pages-agendar-cita.component';
import { PagesVisualizarCitaComponent } from './pages/pages-visualizar-cita/pages-visualizar-cita.component';
import { SharedModule } from '../../../shared/shared.module';
import { TrackingRecordComponent } from './pages/tracking-record/tracking-record.component';
import { AppointmentSchedulePageComponentComponent } from './pages/appointment-schedule-page-component/appointment-schedule-page-component.component';
import { PagesMedicamentosPacienteComponent } from './pages/pages-medicamentos-paciente/pages-medicamentos-paciente.component';


@NgModule({
  declarations: [
    PagesGestionCitasComponent,
    PagesAgendarCitaComponent,
    PagesVisualizarCitaComponent,
    TrackingRecordComponent,
    AppointmentSchedulePageComponentComponent,
    TrackingRecordComponent,
    PagesMedicamentosPacienteComponent
  ],
  imports: [
    CommonModule,
    GestionCitasRoutingModule,
    SharedModule
  ],
  exports : [
    PagesAgendarCitaComponent,
    PagesGestionCitasComponent,
    PagesVisualizarCitaComponent
  ]
})
export class GestionCitasModule { }
