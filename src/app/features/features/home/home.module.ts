import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { DoctorRegisterComponent } from './pages/doctor-register/doctor-register.component';
import { HomeDoctorDashboardComponent } from './pages/home-doctor-dashboard/home-doctor-dashboard.component';


@NgModule({
  declarations: [
    HomePageComponent,
    RegisterComponent,
    LoginComponent,
    HomeAdminComponent,
    DoctorRegisterComponent,
    HomeDoctorDashboardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule, 
    CoreModule
  ],
  exports:[
    HomePageComponent,
    LoginComponent,
    RegisterComponent
  ],
})
export class HomeModule { }
