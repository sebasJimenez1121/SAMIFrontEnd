// src/app/shared/components/templates/appointment-modal/appointment-modal.component.ts
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CitaService } from '../../../../core/service/cita.service';

@Component({
  selector: 'app-appointment-modal',
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.css']
})
export class AppointmentModalComponent implements OnInit {
  @Input() showModal: boolean = false;
  @Input() cita: any;


  @Output() close = new EventEmitter<void>();

  doctorName: string = '';
  doctorSpecialty: string = '';
  patientName: string = '';
  patientDocument: string = '';
  patientPhone: string = '';
  appointmentValue: string = '';
  appointmentReason: string = '';
  citas: any[] = [];
  citasFiltradas: any[] = [];
   
 
  showRescheduleModal: boolean = false; // Nuevo estado para el modal de reagendar
  selectedCita: any = null;

  fileName: string = '';

  constructor(private dataService: CitaService) {}

  ngOnInit(): void {
    if (this.cita) {
      this.loadData(this.cita);
    }
  }



  ngOnChanges(): void {
    if (this.cita) {
      this.loadData(this.cita);
    }
  }

  loadData(cita: any): void {
    this.doctorName = cita.medico;
    this.doctorSpecialty = cita.especialidad;
    this.patientName = cita.paciente;
    this.patientDocument = cita.documento;
    this.patientPhone = cita.telefono;
    this.appointmentValue = cita.valorCita;
    this.appointmentReason = cita.motivoCita;
  }
  rescheduleAppointment(): void {
    this.showModal = false;
    this.showRescheduleModal = true; 
  }
  filtrarCitas(event: any): void {
    const fecha = event.target.value;
    this.citasFiltradas = this.citas.filter(cita => cita.fecha === fecha);
  }


  onReagendar(fecha: Date): void {
    if (this.selectedCita) {
      const citaId = this.selectedCita.id;
      this.dataService.guardarFechaSeleccionada(fecha.toISOString(), citaId).subscribe(() => {
        this.showRescheduleModal = false;
        this.filtrarCitas({ target: { value: fecha.toISOString().split('T')[0] } });
      });
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.close.emit();
  }

  cancelAppointment(): void {
    // Lógica para cancelar la cita
    this.closeModal();
  }

 

  triggerFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLElement;
    fileInput.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileName = Array.from(input.files).map(file => file.name).join(', ');
    }
  }
}














