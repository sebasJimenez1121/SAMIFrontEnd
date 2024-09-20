import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PacienteService } from '../../../../core/service/paciente.service';
import { Patient } from '../../../../core/models/patient.model';

@Component({
  selector: 'app-template-medical-history',
  templateUrl: './template-medical-history.component.html',
  styleUrls: ['./template-medical-history.component.css']
})
export class TemplateMedicalHistoryComponent implements OnInit {
  @Input() pacientes: Patient[] = [];
  @Output() dateChange: EventEmitter<string> = new EventEmitter();
  @Output() pageChange: EventEmitter<number> = new EventEmitter();
  @Output() viewDetails: EventEmitter<Patient> = new EventEmitter();
  @Input() titleText: string = 'Historia Clinica';
  @Input() titleClass: string = 'custom-title';

  imageUrl: string | null = '';
  isProfileModalOpen = false;
  showModal: boolean = false;
  showCreateHistoryModal = false;
  selectedPacienteId: string = '';  
  DocumentoFiltro: Patient[] = []; 
  patientSelected : Patient| null = null;; 

  constructor(private dataService: PacienteService) {}

  ngOnInit(): void {
    this.loadPacientes();
  }

  openProfileModal() {
    this.isProfileModalOpen = true;
  }

  loadPacientes(): void {
    this.dataService.getPatients().subscribe(
      (response: any) => {
        this.pacientes = response.patients;
        this.DocumentoFiltro = this.pacientes;
        console.log(this.DocumentoFiltro);
      },
      (error: any) => {
        console.error('Error loading pacientes:', error);
      }
    );
  }

  filtroDocumento(event: any): void {
    const documento = event.target.value;
    this.DocumentoFiltro = this.pacientes.filter(paciente =>
      paciente.Documento.startsWith(documento)
    );
  }
  openHistoriaClinicaModal(paciente: Patient): void {    
    this.patientSelected = paciente;
    this.showCreateHistoryModal = true;
  }

  closeHistoriaClinicaModal(): void {    
    this.patientSelected = null;
    this.showCreateHistoryModal = false;
    console.log(this.showCreateHistoryModal);
    
  }
  

  verMas(paciente: Patient): void {
    this.selectedPacienteId = paciente.Id || ''; 
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
}
