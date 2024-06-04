import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/features/home/pages/home-page/home-page.component';
import { RegisterComponent } from './features/features/home/pages/register/register.component';
import { LoginComponent } from './features/features/home/pages/login/login.component';
import { PagesAgendarCitaComponent } from './features/features/gestion-citas/pages/pages-agendar-cita/pages-agendar-cita.component';
import { PagesGestionCitasComponent } from './features/features/gestion-citas/pages/pages-gestion-citas/pages-gestion-citas.component';
import { PagesVisualizarCitaComponent } from './features/features/gestion-citas/pages/pages-visualizar-cita/pages-visualizar-cita.component';
const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'agendar-cita', component: PagesAgendarCitaComponent },
  { path: 'gestion-cita', component: PagesGestionCitasComponent },
  { path: 'visualizar-cita', component: PagesVisualizarCitaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'resgister', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
