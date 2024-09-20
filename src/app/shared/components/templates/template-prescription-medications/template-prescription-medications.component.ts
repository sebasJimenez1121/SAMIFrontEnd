import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CitaService } from '../../../../core/service/cita.service';
import { Appointment } from '../../../../core/models/appointment.model';

@Component({
  selector: 'app-template-prescription-medications',
  templateUrl: './template-prescription-medications.component.html',
  styleUrls: ['./template-prescription-medications.component.css']
})
export class TemplatePrescriptionMedicationsComponent implements OnInit {
  @Input() citas: Appointment[] = [];
  @Output() dateChange: EventEmitter<string> = new EventEmitter();
  @Output() pageChange: EventEmitter<number> = new EventEmitter();
  @Output() viewDetails: EventEmitter<Appointment> = new EventEmitter();
  @Input() titleText: string = 'Receta Medicamentos';
  @Input() titleClass: string = 'custom-title';

  imageUrl: string | null = '';
  isProfileModalOpen = false;
  showModal: boolean = false;
  showCreateHistoryModal = false;
  selectedCitaId: string = '';  
  DocumentoFiltro: Appointment[] = []; 
  citaSelected: Appointment | null = null; 

  constructor(private citaService: CitaService) {}

  ngOnInit(): void {
    this.loadCitas();
  }

  openProfileModal() {
    this.isProfileModalOpen = true;
  }

  loadCitas(): void {
    this.citaService.getCitas().subscribe(
      (response: any) => {
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
          // Añadir más citas si es necesario
        ];
        this.citas = appointments; // Cargamos citas locales
        this.DocumentoFiltro = appointments;
      },
      (error: any) => {
        console.error('Error loading citas:', error);
      }
    );
  }

  filtroDocumento(event: any): void {
    const documento = event.target.value;
    this.DocumentoFiltro = this.citas.filter(cita =>
      cita.documentoPaciente.startsWith(documento)
    );
  }

  openHistoriaClinicaModal(cita: Appointment): void {    
    this.citaSelected = cita;
    this.showCreateHistoryModal = true;
  }

  closeHistoriaClinicaModal(): void {    
    this.citaSelected = null;
    this.showCreateHistoryModal = false;
  }

  verMas(cita: Appointment): void {
    this.selectedCitaId = cita.codigoCita.toString(); 
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
}
