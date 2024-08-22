import { Component } from '@angular/core';

@Component({
  selector: 'app-how-to-schedule',
  templateUrl: './how-to-schedule.component.html',
  styleUrl: './how-to-schedule.component.css'
})
export class HowToScheduleComponent {
  titleClass: string = 'white-title';
  titleText: string = '¿Cómo agendar una cita en SAMI?';
  videoUrl: string = 'https://www.youtube.com/watch?v=EPiTMZTOsz0&t=156s/VIDEO_ID';
  width:string='7rem';
}
