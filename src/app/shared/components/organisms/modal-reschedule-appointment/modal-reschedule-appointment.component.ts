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
  swalAlert: any = null;
  minDate: Date;
  maxDate: Date;
  showDateErrorMessage: boolean = false;

  constructor(private dataService: CitaService) {
    const today = new Date();
    this.minDate = new Date(today.getFullYear(), today.getMonth(), 1); 
    this.maxDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  }

  closeRescheduleModal(): void {
    this.closeRescheduleModalEvent.emit();
    this.showRescheduleModal = false;
  }

  guardarNuevaFecha(): void {
    if (this.cita && this.nuevaFecha && this.nuevaHora) {
      const fechaSeleccionada = new Date(this.nuevaFecha);

      if (fechaSeleccionada.getDay() === 0 || fechaSeleccionada.getDay() === 6) {
        this.showWeekendWarningAlert();
        return;
      }

    
      if (fechaSeleccionada < this.minDate || fechaSeleccionada > this.maxDate) {
        this.showDateErrorMessage = true;
        return;
      }

      const nuevaFechaHora = `${this.nuevaFecha} ${this.nuevaHora}`;
      this.dataService.verificarDisponibilidad(nuevaFechaHora).subscribe(disponible => {
        if (disponible) {
          this.showConfirmAlert();
        } else {
          this.showWarningAlert();
        }
      }, error => {
        console.error('Error al verificar disponibilidad:', error);
    
      });
    } else {
      console.error('La cita, nuevaFecha o nuevaHora es null o indefinida.');
    }
  }

  showConfirmAlert(): void {
    Swal.fire({
      title: '¿Está seguro?',
      text: '¿Quieres reagendar esta cita?',
      showCancelButton: true,
      confirmButtonColor: '#1F3FAE',
      cancelButtonColor: '#A32020',
      confirmButtonText: 'Sí, reagendar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.handleAlertButtonClick(1);
      }
    });
  }

  showWeekendWarningAlert(): void {
    Swal.fire({
      title: 'Día No Disponible',
      text: 'No se puede agendar citas los sábados ni domingos. Por favor, elige otro día.',
      icon: 'warning',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      toast: true,
      position: 'top',
      background: '#F5C0B8',
      iconColor: '#D02B20'
    });
  }

  showWarningAlert(): void {
    Swal.fire({
      title: 'Horario No Disponible',
      text: 'El horario seleccionado no está disponible. Por favor, elige otro horario.',
      icon: 'warning',
      showConfirmButton: false,
      showCancelButton: false,
      timer: 4000,
      timerProgressBar: true,
      toast: true,
      position: 'top',
      background: '#F5C0B8',
      iconColor: '#D02B20'
    });
  }

  handleAlertButtonClick(id: number | null): void {
    if (id === 1) {
      const citaId = this.cita?.codigoCita;
      if (citaId) {
        const nuevaFechaHora = `${this.nuevaFecha} ${this.nuevaHora}`;
        this.dataService.guardarFechaSeleccionada(nuevaFechaHora, citaId).subscribe(() => {
          this.dataService.enviarNotificaciones(citaId).subscribe(() => {
            this.showSuccessAlert();
            this.closeRescheduleModal();
          }, error => {
            console.error('Error al enviar notificaciones:', error);
          });
        }, error => {
          console.error('Error al guardar nueva fecha:', error);
        });
      } else {
        console.error('El ID de la cita es null o indefinido.');
      }
    }
  }

  showSuccessAlert(): void {
    this.swalAlert = Swal.fire({
      title: 'Cita Reagendada',
      text: 'La cita se ha reagendado exitosamente.',
      icon: 'success',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      toast: true,
      position: 'top',
      background: '#C6F0C2',
      iconColor: '#1C5314'
    });
  }

  // Método para cerrar la alerta de SweetAlert2
  closeSwalAlert(): void {
    if (this.swalAlert) {
      Swal.close();
      this.swalAlert = null;
    }
  }
}
