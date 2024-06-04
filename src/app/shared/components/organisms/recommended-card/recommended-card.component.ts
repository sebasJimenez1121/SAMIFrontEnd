import { Component, Input } from '@angular/core';
import { Doctor } from '../../../../core/models/doctor.model';

@Component({
  selector: 'app-recommended-card',
  templateUrl: './recommended-card.component.html',
  styleUrl: './recommended-card.component.css'
})
export class RecommendedCardComponent {
  @Input() doctor!: Doctor;
}
