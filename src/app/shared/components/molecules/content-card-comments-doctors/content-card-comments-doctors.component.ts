import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-card-comments-doctors',
  templateUrl: './content-card-comments-doctors.component.html',
  styleUrl: './content-card-comments-doctors.component.css'
})
export class ContentCardCommentsDoctorsComponent {
  @Input() nombre:string = "Jose Luis";
  @Input() especialidad:string = "odontología";
  @Input() fecha:string = "12/12/2024";
  @Input() realizador:string="Laura Zerna";
  @Input() comentario:string = "Un excelente especialista y trabajador de la salud, con un servicio excepcional y un trabajo impecable.";
  fechaRealizador = `${this.realizador} ${this.fecha}`;
}
