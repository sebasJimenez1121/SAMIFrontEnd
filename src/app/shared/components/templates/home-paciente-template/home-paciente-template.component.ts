import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService} from '../../../../core/service/doctor.service';
import { Doctor } from '../../../../core/models/doctor.model';
@Component({
  selector: 'app-home-paciente-template',
  templateUrl: './home-paciente-template.component.html',
  styleUrl: './home-paciente-template.component.css'
})
export class HomePacienteTemplateComponent implements OnInit {
  recommendedDoctors: Doctor[] = [];

  constructor(private router: Router, private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.loadTopRankedDoctors();
  }

  onAvatarClick(): void {
    this.router.navigate(['/profile']);
  }

  loadTopRankedDoctors(): void {
    this.doctorService.loadTopRankedDoctors().subscribe(
      recommendedDoctors => {
        this.recommendedDoctors = recommendedDoctors;
      },
      error => {
        console.error('Error loading top ranked doctors:', error);
      }
    );
  }

}
