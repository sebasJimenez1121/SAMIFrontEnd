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
    if (this.cita) {
      this.dataService.cancelarCita(this.cita.id).subscribe(() => {
        this.closeModal();
        Swal.fire({
          imageUrl: "../../../../../assets/images/Exito.png",
          imageWidth: 250,
          imageHeight: 250,
          imageAlt: "Custom image",
          title: "Cita cancelada",
          text: "La cita ha sido cancelada exitosamente.",
          
        });
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
    // Restablecer los valores de nuevaFecha y nuevaHora cuando se cierra el modal de reagendar cita
    this.nuevaFecha = this.nuevaFechaTemporal;
    this.nuevaHora = this.nuevaHoraTemporal;
  
    this.showModal = true; // Mostrar el modal principal
    this.showRescheduleModal = false; // Ocultar el modal de reagendar cita
  }
}
