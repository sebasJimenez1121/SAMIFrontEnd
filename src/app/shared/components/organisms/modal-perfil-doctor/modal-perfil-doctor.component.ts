import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DoctorPublic } from '../../../../core/models/doctor.model';

@Component({
  selector: 'app-modal-perfil-doctor',
  templateUrl: './modal-perfil-doctor.component.html',
  styleUrls: ['./modal-perfil-doctor.component.css']
})
export class ModalPerfilDoctorComponent {
  @Input() doctor!: DoctorPublic;
  @Output() closeModal = new EventEmitter<void>();

  // Simulación de comentarios
  comments = [
    {
      name: 'Carlos Pérez',
      location: 'Bogotá, Colombia',
      date: '2024-08-20',
      text: 'El doctor fue muy atento y profesional. Me explicó todo de manera clara y me sentí en confianza.'
    },
    {
      name: 'Andrea Gómez',
      location: 'Medellín, Colombia',
      date: '2024-07-15',
      text: 'Muy buen servicio. El doctor resolvió todas mis dudas y el tratamiento recomendado ha sido efectivo.'
    }
    // Otros comentarios simulados
  ];

  // Función para añadir comentarios (puede ser simulada por ahora)
  addComment() {
    // Aquí puedes añadir la lógica para añadir un nuevo comentario
    console.log('Comentario añadido');
  }

  handleClose() {
    this.closeModal.emit();  // Cierra el modal
  }
}
