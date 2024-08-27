import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService} from '../../../../core/service/doctor.service';
import { Doctor } from '../../../../core/models/doctor.model';
@Component({
  selector: 'app-home-paciente-template',
  templateUrl: './home-paciente-template.component.html',
  styleUrl: './home-paciente-template.component.css'
})
export class HomePacienteTemplateComponent {
  recommendedDoctors: Doctor[] = [];

  constructor(private router: Router, private doctorService: DoctorService) {}


  onAvatarClick(): void {
    this.router.navigate(['/profile']);
  }


}
