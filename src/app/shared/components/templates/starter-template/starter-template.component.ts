import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService} from '../../../../core/service/doctor.service';
import { Doctor } from '../../../../core/models/doctor.model';

@Component({
  selector: 'starter-template',
  templateUrl: './starter-template.component.html',
  styleUrls: ['./starter-template.component.css']
})
export class StarterTemplateComponent implements OnInit {
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