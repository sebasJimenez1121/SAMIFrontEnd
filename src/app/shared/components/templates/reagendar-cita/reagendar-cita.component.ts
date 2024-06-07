// src/app/shared/components/templates/reagendar-cita/reagendar-cita.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reagendar-cita',
  templateUrl: './reagendar-cita.component.html',
  styleUrls: ['./reagendar-cita.component.css']
})
export class ReagendarCitaComponent {
  @Input() showModal: boolean = false;
  @Output() reagendarCita = new EventEmitter<Date>(); 

  closeModal(): void {
    this.showModal = false;
  }

  onReagendar(): void {
    // Aquí se debería recoger la fecha seleccionada del input date
    const fechaSeleccionada = new Date(); // Aquí deberías obtener la fecha real seleccionada
    this.reagendarCita.emit(fechaSeleccionada);
    this.showModal = false; 
  }
}
