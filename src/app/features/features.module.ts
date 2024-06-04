import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './features/home/home.module';
import { SharedModule } from '../shared/shared.module';

import { StarterTemplateComponent } from '../shared/components/templates/starter-template/starter-template.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    HomeModule
  ]
})
export class FeaturesModule { }
