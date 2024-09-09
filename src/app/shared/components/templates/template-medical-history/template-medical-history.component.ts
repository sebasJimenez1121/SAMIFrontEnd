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
  showCreateHistoryModal: boolean = false;  // Nuevo flag para mostrar el modal
  selectedpaciente: Patient | null = null;
  DocumentoFiltro: Patient[] = []; 

  constructor(private dataService: PacienteService) {}

  ngOnInit(): void {
    this.loadPacientes();
  }

  openProfileModal() {
    this.isProfileModalOpen = true;
  }

  loadPacientes(): void {
    this.dataService.getPatients().subscribe(
        (data: Patient[]) => {
          this.pacientes = data;
          this.DocumentoFiltro = this.pacientes;
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

  verMas(paciente: Patient): void {
    this.selectedpaciente = paciente;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  // Método para abrir el modal de crear historia
  openCreateHistoryModal(): void {
    this.showCreateHistoryModal = true;
  }

  // Método para cerrar el modal de crear historia
  closeCreateHistoryModal(): void {
    this.showCreateHistoryModal = false;
  }
}
