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

  closeRescheduleModal(): void {
    this.closeRescheduleModalEvent.emit();
    this.showRescheduleModal = false;
  }

  guardarNuevaFecha(): void {
    if (this.cita && this.nuevaFecha && this.nuevaHora) {
      const nuevaFechaHora = `${this.nuevaFecha} ${this.nuevaHora}`;

      this.dataService.verificarDisponibilidad(nuevaFechaHora).subscribe(disponible => {
        if (disponible) {
          Swal.fire({
            title: '¿Estás seguro?',
            text: '¿Quieres reagendar esta cita?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, reagendar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              const citaId = this.cita?.id; 
              if (citaId) {
                this.dataService.guardarFechaSeleccionada(nuevaFechaHora, citaId).subscribe(() => {
                  this.dataService.enviarNotificaciones(citaId).subscribe(() => {
                    Swal.fire('Cita Reagendada', 'La cita se ha reagendado exitosamente.', 'success');
                    this.closeRescheduleModal();
                  }, error => {
                    Swal.fire('Error', 'Hubo un problema al enviar las notificaciones.', 'error');
                    console.error('Error al enviar notificaciones:', error);
                  });
                }, error => {
                  Swal.fire('Error', 'Hubo un problema al reagendar la cita. Por favor, inténtalo de nuevo.', 'error');
                  console.error('Error al guardar nueva fecha:', error);
                });
              } else {
                console.error('El ID de la cita es null o indefinido.');
              }
            }
          });
        } else {
          Swal.fire('Horario No Disponible', 'El horario seleccionado no está disponible. Por favor, elige otro horario.', 'warning');
        }
      });
    } else {
      console.error('La cita, nuevaFecha o nuevaHora es null o indefinida.');
    }
  }
}
