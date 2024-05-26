import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';
import { NavigationStepperComponent } from './shared/components/atoms/navigation-stepper/navigation-stepper.component'

const routes: Routes = [
    {path:'navetion', component:NavigationStepperComponent},
  //   { path: '', component: HomeComponent, data: { breadcrumb: 'Inicio' } },
  // { path: 'about', component: AboutComponent, data: { breadcrumb: 'Nosotros' } },
  // { path: 'contact', component: ContactComponent, data: { breadcrumb: 'Contacto' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
