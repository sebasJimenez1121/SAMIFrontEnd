import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentFormComponent } from './shared/components/molecules/appointment-form/appointment-form.component';
import { ButtonSetLoginRegistrationComponent } from './shared/components/molecules/button-set-login-registration/button-set-login-registration.component';
import { ContentCardComponent } from './shared/components/molecules/content-card/content-card.component';

const routes: Routes = [
    {path:'formulario', component: AppointmentFormComponent},
    {path:'login', component: ButtonSetLoginRegistrationComponent},
    {path:'calendario', component: ContentCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
