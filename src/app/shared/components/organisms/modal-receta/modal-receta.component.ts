import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Appointment, Recordatorio } from '../../../../core/models/appointment.model'; // Ajusta la ruta según tu proyecto

@Component({
  selector: 'app-modal-receta',
  templateUrl: './modal-receta.component.html',
  styleUrls: ['./modal-receta.component.css']
})
export class ModalRecetaComponent {
  @Input() showModal: boolean = true;
  @Input() cita: Appointment| null = null; 
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  // Definimos el objeto `recordatorio` según la interfaz Recordatorio
  recordatorio: Recordatorio = {
    codigoRec: 0,
    fechaReceta: '',
    medicamentoNom: '',
    emailPac: '',
    descripcionMed: '',
    fechaIncio: '',
    fechaFin: '',
    horaInicio: '',
    intervalo: 0,
    estado: 'activo',
    fkCodigoCita: 0
  };

  closeModal(): void {
    this.showModal = false;
    this.close.emit();
  }

  onSubmit(): void {
    // Aquí puedes manejar la lógica para enviar el recordatorio a un servicio
    console.log(this.recordatorio);

    // Lógica para cerrar el modal después de crear el recordatorio
    this.closeModal();
  }
}
