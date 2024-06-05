// reagendar-cita.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reagendar-cita',
  templateUrl: './reagendar-cita.component.html',
  styleUrls: ['./reagendar-cita.component.css']
})
export class ReagendarCitaComponent {
  @Input() showModal: boolean = false;
  @Output() reagendarCita = new EventEmitter<Date>(); // Nuevo EventEmitter para reagendar cita

  closeModal(): void {
    this.showModal = false;
  }

  cancelAppointment(): void {
    this.showModal = false;
  }

  onReagendar(): void {
    // Simplemente emitimos un evento con la nueva fecha y hora seleccionadas
    this.reagendarCita.emit(new Date());
    this.showModal = false; // Cerrar modal después de reagendar
  }
}
