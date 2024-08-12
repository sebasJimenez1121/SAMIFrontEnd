import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CitaService } from '../../../../core/service/cita.service';
import { Appointment } from '../../../../core/models/appointment.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-display-data',
  templateUrl: './modal-display-data.component.html',
  styleUrls: ['./modal-display-data.component.css']
})
export class ModalDisplayDataComponent implements OnInit {
  @Input() showModal: boolean = true;
  @Input() citaId: string | null = null;
  @Output() closeModalEvent: EventEmitter<void> = new EventEmitter<void>();
  @Input() cita: Appointment | null = null;

  insertedDocuments = '';
  showRescheduleModal: boolean = false;
  nuevaFechaTemporal: string = '';
  nuevaHoraTemporal: string = '';
  nuevaFecha: string = '';
  nuevaHora: string = '';
  citaCancelada: boolean = false;

  constructor(private dataService: CitaService) {}

  ngOnInit(): void {
    if (this.citaId) {
      this.dataService.getCitaById(this.citaId).subscribe((cita: Appointment) => {
        this.cita = cita;
      });
    }
  }

  cancelAppointment(): void {
    if (this.cita?.id !== null && this.cita?.id !== undefined) {
      Swal.fire({
        title: '¿Está seguro?',
        text: '¿Está seguro de que desea cancelar esta cita?',
        showCancelButton: true,
        confirmButtonColor: '#1F3FAE',
        cancelButtonColor: '#A32020',
        confirmButtonText: 'Sí, cancelar cita',
        cancelButtonText: 'No, mantener cita'
      }).then((result) => {
        if (result.isConfirmed) {
          const citaId = this.cita!.id;
          this.dataService.cancelarCita(citaId).subscribe(
            () => {
              this.citaCancelada = true; 
              this.closeModal();
              this.showAlert('successCancel');
            },
            error => {
              this.showAlert('errorCancel');
            }
          );
        }
      });
    }
  }

  showAlert(type: 'successCancel' | 'errorCancel'): void {
    let alertConfig: any = {};

    switch (type) {
      case 'successCancel':
        alertConfig = {
          title: 'Cancelacion Exitosa',
          text: 'La cita ha sido cancelada exitosamente.',
          icon: 'success',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          toast: true,
          position: 'top', 
          background:"#C6F0C2",
          iconColor:"#1C5314",
          
        };
        break;
      case 'errorCancel':
        alertConfig = {
          title: 'Error al cancelar cita',
          text: 'No se pudo cancelar la cita. Por favor, inténtelo nuevamente más tarde.',
          icon: 'error',
          showConfirmButton: true,
          confirmButtonText: 'OK',
          customClass: 'swal2-error',
          background:"#FCECEA",
          iconColor:"#A32020",
        };
        break;
      default:
        break;
    }

    Swal.fire(alertConfig);
  }

  closeModal(): void {
    this.showModal = false;
    this.closeModalEvent.emit();
  }

  rescheduleAppointment(): void {
    this.nuevaFechaTemporal = this.nuevaFecha;
    this.nuevaHoraTemporal = this.nuevaHora;
    this.showModal = false;
    this.showRescheduleModal = true;
  }

  closeRescheduleModal(): void {
    this.nuevaFecha = this.nuevaFechaTemporal;
    this.nuevaHora = this.nuevaHoraTemporal;
    this.showModal = true;
    this.showRescheduleModal = false;
  }
}
