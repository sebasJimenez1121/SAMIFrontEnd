import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/features/home/pages/home-page/home-page.component';
import { RegisterComponent } from './features/features/home/pages/register/register.component';
import { LoginComponent } from './features/features/home/pages/login/login.component';
import { PagesAgendarCitaComponent } from './features/features/gestion-citas/pages/pages-agendar-cita/pages-agendar-cita.component';
import { PagesGestionCitasComponent } from './features/features/gestion-citas/pages/pages-gestion-citas/pages-gestion-citas.component';
import { PagesVisualizarCitaComponent } from './features/features/gestion-citas/pages/pages-visualizar-cita/pages-visualizar-cita.component';
import { DoctorRegisterComponent } from './features/features/home/pages/doctor-register/doctor-register.component';
import { HomeAdminComponent } from './features/features/home/pages/home-admin/home-admin.component';
import { HomeDoctorDashboardComponent } from './features/features/home/pages/home-doctor-dashboard/home-doctor-dashboard.component';
import { HomePacienteComponent } from './features/features/home/pages/home-paciente/home-paciente.component';
import { DoctorsProfilesComponent } from './features/features/home/pages/doctors-profiles/doctors-profiles.component';
import { TrackingRecordComponent }from'./features/features/gestion-citas/pages/tracking-record/tracking-record.component';
import {RecoverPassworddComponent} from './features/features/home/pages/recover-passwordd/recover-passwordd.component';
import {NewPassworddComponent} from './features/features/home/pages/new-passwordd/new-passwordd.component';
import {ConfirmationComponent} from './features/features/home/pages/confirmation/confirmation.component';
import { authGuard } from './core/guards/auth.guard';
import {PagesMedicamentosPacienteComponent } from './features/features/gestion-citas/pages/pages-medicamentos-paciente/pages-medicamentos-paciente.component';
import { MedicalHistoryDoctorComponent} from './features/features/gestion-citas/pages/medical-history-doctor/medical-history-doctor.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent},
  { path: 'agendar-cita', component: PagesAgendarCitaComponent, canActivate: [authGuard], data:{role: ['admin', 'paciente']}},
  { path: 'gestion-cita', component: PagesGestionCitasComponent},
  { path: 'visualizar-cita', component: PagesVisualizarCitaComponent, canActivate: [authGuard], data:{role: ['admin', 'paciente']}},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-doctor', component: DoctorRegisterComponent, canActivate: [authGuard], data:{role: ['admin']}},
  { path: 'home-admin', component: HomeAdminComponent, canActivate: [authGuard], data:{role: ['admin']} },
  { path: 'home-doctor', component: HomeDoctorDashboardComponent, canActivate: [authGuard], data:{role: ['medico']} },
  { path: 'home-paciente', component: HomePacienteComponent},
  { path: 'doctors-profiles', component: DoctorsProfilesComponent},
  { path: 'registro-seguimiento', component: TrackingRecordComponent,  canActivate: [authGuard], data:{role: ['paciente']}},
  { path: 'recover-passwordd', component: RecoverPassworddComponent},
  { path: 'new-passwordd', component: NewPassworddComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'Medicamentos', component: PagesMedicamentosPacienteComponent },
  { path: 'Historia-clinica', component: MedicalHistoryDoctorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
