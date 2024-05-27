import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentFormComponent } from './shared/components/molecules/appointment-form/appointment-form.component';
import { ButtonSetLoginRegistrationComponent } from './shared/components/molecules/button-set-login-registration/button-set-login-registration.component';
import { ImageCardServicesComponent } from './shared/components/molecules/image-card-services/image-card-services.component';

const routes: Routes = [
    {path:'formulario', component: AppointmentFormComponent},
    {path:'login', component: ButtonSetLoginRegistrationComponent},
    {path:'calendario', component: ImageCardServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
