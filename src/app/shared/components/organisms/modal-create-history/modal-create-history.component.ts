import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HistoriaClinicaService } from '../../../../core/service/HistoriaClinica.Service'; // Actualiza la importación
import { Appointment } from '../../../../core/models/appointment.model';
import { Patient } from '../../../../core/models/patient.model';

@Component({
  selector: 'app-modal-create-history',
  templateUrl: './modal-create-history.component.html',
  styleUrls: ['./modal-create-history.component.css']
})
export class ModalCreateHistoryComponent implements OnInit {
  @Input() paciente: Patient| null = null; 
  @Input() showModal: boolean = true;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  citas: Appointment[] = [];
  paginatedCitas: Appointment[] = []; 
  currentPage: number = 0;
  itemsPerPage: number = 5;
  patient: Patient | null = null; 
  nuevaDescripcion: string = '';
  totalPages: number = 0;
  mostrarModal: boolean = false;
  showRescheduleModal: boolean = false;

  constructor(
    private historiaClinicaService: HistoriaClinicaService // Actualiza la inyección del servicio
  ) {}

  ngOnInit(): void {
    this.obtenerCitasConDescripcion()    
  }

  obtenerCitasConDescripcion() {
    if (this.paciente) {
      this.historiaClinicaService.getCitasConDescripcion(this.paciente.Id).subscribe(
        (citas: Appointment[]) => {
          const appointments: Appointment[] = [
            {
              codigoCita: 1,
              motivoCita: "Consulta general",
              estadoCita: "Confirmada",
              horaCita: "10:00",
              fechaCita: "2024-09-20",
              fkIdAdmin: "admin001",
              idDoctor: "doctor001",
              nombreDoctor: "Juan",
              apellidoDoctor: "Pérez",
              emailDoctor: "juan.perez@example.com",
              tarjetaProfDoctor: "123456789",
              imagenMedico: "path/to/image1.jpg",
              valorCita: "$50",
              idPaciente: "paciente001",
              nombrePaciente: "Laura",
              apellidoPaciente: "Jiménez",
              emailPaciente: "laura.jimenez@example.com",
              documentoPaciente: "1234567890",
              codigoEspecialidad: "esp001",
              nombreEspecialidad: "Cardiología",
              descripcion: "Revisión de salud cardíaca",
              hora: "10:00"
            },
            {
              codigoCita: 2,
              motivoCita: "Chequeo anual",
              estadoCita: "Pendiente",
              horaCita: "14:00",
              fechaCita: "2024-09-21",
              fkIdAdmin: "admin002",
              idDoctor: "doctor002",
              nombreDoctor: "Ana",
              apellidoDoctor: "García",
              emailDoctor: "ana.garcia@example.com",
              tarjetaProfDoctor: "987654321",
              imagenMedico: "path/to/image2.jpg",
              valorCita: "$60",
              idPaciente: "paciente002",
              nombrePaciente: "Carlos",
              apellidoPaciente: "López",
              emailPaciente: "carlos.lopez@example.com",
              documentoPaciente: "0987654321",
              codigoEspecialidad: "esp002",
              nombreEspecialidad: "Dermatología",
              descripcion: "Evaluación de piel",
              hora: "14:00"
            },
            
          ];
          this.citas = appointments;
          this.totalPages = Math.ceil(this.citas.length / this.itemsPerPage);
          this.paginarCitas();
        },
        error => {
          console.error('Error al obtener citas con descripción', error);
        }
      );
    }
    
  }

  // agregarDescripcion(cita: Appointment) {
  //   if (this.nuevaDescripcion.trim()) {
  //     // Llamada al servicio para actualizar la descripción de la cita
  //     this.historiaClinicaService.updateDescripcion(cita.codigoCita.toString(), this.nuevaDescripcion).subscribe(
  //       () => {
  //         this.nuevaDescripcion = ''; 
  //         this.obtenerCitasConDescripcion(this.paciente.Id); // Refresca las citas después de la actualización
  //       },
  //       error => {
  //         console.error('Error al agregar descripción', error);
  //       }
  //     );
  //   }
  // }

  paginarCitas() {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedCitas = this.citas.slice(start, end);
  }

  cambiarPagina(direccion: number) {
    this.currentPage += direccion;
    this.paginarCitas();
  }

  closeModal(): void {
    this.showModal = false;
    this.close.emit();
  }

  rescheduleAppointment(): void {
    this.showModal = false;
    this.showRescheduleModal = true;
  }

  closeRescheduleModal(): void {
    this.showModal = true;
    this.showRescheduleModal = false;
  }
}
