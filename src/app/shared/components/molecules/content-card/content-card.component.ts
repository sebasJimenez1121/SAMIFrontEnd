import { Component, Input } from '@angular/core';
import { Doctor } from '../../../../core/service/doctor.service';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent {
  @Input() doctor!: Doctor;
}
