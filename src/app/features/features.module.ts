import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './features/home/home.module';
import { SharedModule } from '../shared/shared.module';

import { GestionCitasModule } from './features/gestion-citas/gestion-citas.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    HomeModule,
    GestionCitasModule,
    SharedModule
  ]
})
export class FeaturesModule { }
