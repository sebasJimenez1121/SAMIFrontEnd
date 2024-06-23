import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CitaService } from '../../../../core/service/cita.service';
import { Appointment } from '../../../../core/models/appointment.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-modal-reschedule-appointment',
  templateUrl: './modal-reschedule-appointment.component.html',
  styleUrls: ['./modal-reschedule-appointment.component.css']
})
export class ModalRescheduleAppointmentComponent {
  @Input() showRescheduleModal: boolean = false;
  @Input() cita: Appointment | null = null;
  @Output() closeRescheduleModalEvent: EventEmitter<void> = new EventEmitter<void>();
  nuevaFecha: string = '';
  nuevaHora: string = '';

  constructor(private dataService: CitaService) {}

  guardarNuevaFecha(): void {
    if (this.cita && this.nuevaFecha && this.nuevaHora) {
      const nuevaFechaHora = `${this.nuevaFecha} ${this.nuevaHora}`;
      this.dataService.guardarFechaSeleccionada(nuevaFechaHora, this.cita.id).subscribe(() => {
        this.closeRescheduleModal();
      });
      Swal.fire({
        title: "Cita reagendada",
        text: "La cita ha sido reagendada exitosamente.",
        icon: "success"
      });
    }
  }

  closeRescheduleModal(): void {
    this.closeRescheduleModalEvent.emit();
    this.showRescheduleModal = false; 
  }
}
