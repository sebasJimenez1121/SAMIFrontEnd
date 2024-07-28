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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'agendar-cita', component: PagesAgendarCitaComponent },
  { path: 'gestion-cita', component: PagesGestionCitasComponent },
  { path: 'visualizar-cita', component: PagesVisualizarCitaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-doctor', component: DoctorRegisterComponent },
  { path: 'home-admin', component: HomeAdminComponent },
  { path: 'home-doctor', component: HomeDoctorDashboardComponent },
  { path: 'home-paciente', component: HomePacienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
