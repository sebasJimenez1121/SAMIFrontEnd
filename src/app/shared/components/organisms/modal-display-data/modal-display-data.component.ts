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
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, cancelar cita',
        cancelButtonText: 'No, mantener cita'
      }).then((result) => {
        if (result.isConfirmed) {
          const citaId = this.cita!.id; 
          this.dataService.cancelarCita(citaId).subscribe(
            () => {
              this.closeModal();
              Swal.fire({
                imageUrl: `<img src="../../../../../assets/images/Exito.png>`,
                imageWidth: 250,
                imageHeight: 250,
                imageAlt: "Custom image",
                title: "Cita cancelada",
                text: "La cita ha sido cancelada exitosamente."
              });
            },
            error => {
              if (error.status === 404) {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'La cita no pudo ser encontrada. Por favor, verifique la información.'
                });
              } else {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'No se pudo cancelar la cita. Por favor, inténtelo nuevamente más tarde.'
                });
              }
            }
          );
        }
      });
    } 
    
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
