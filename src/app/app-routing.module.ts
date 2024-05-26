import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationStepperComponent } from './shared/components/atoms/navigation-stepper/navigation-stepper.component'

const routes: Routes = [
    {path:'navetion', component:NavigationStepperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
