import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-card-comments-doctors',
  templateUrl: './content-card-comments-doctors.component.html',
  styleUrl: './content-card-comments-doctors.component.css'
})
export class ContentCardCommentsDoctorsComponent {
  @Input() nombre:string = "jose luis";
  @Input() especialidad:string = "odontologia";
  @Input() fecha:string = "12/12/2024";
  @Input() realizador:string="laura zerna";
  @Input() comentario:string = "un excelente especialista y trabajador de la salud, servicio execional y trabajo inpecable";
  fechaRealizador = `${this.realizador} ${this.fecha}`;
}
