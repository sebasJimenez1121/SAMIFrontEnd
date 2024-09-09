import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PacienteService } from '../../../../core/service/paciente.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  headers = ['Paciente', 'Documento', 'Email', 'Estado', 'Acciones'];
  patients: any[] = [];

  @Output() patientSelected = new EventEmitter<any>();  // EventEmitter for full patient

  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {
    this.pacienteService.getPatients().subscribe(
      (response: any) => {
        const patientsData = response.patients; 
        if (Array.isArray(patientsData)) {
          this.patients = patientsData.map(patient => ({
            ...patient,  // Preserve the full patient object
            Paciente: `${patient.Nombre} ${patient.Apellido}`,
            Acciones: patient.Id
          }));
        }
      },
      (error) => {
        console.error('Error al cargar los pacientes:', error);
      }
    );
  }
  
  onActionClick(id: number) {
    const selectedPatient = this.patients.find(patient => patient.Acciones === id);
    if (selectedPatient) {
      this.patientSelected.emit(selectedPatient);  // Emitir el paciente seleccionado
    }
  }
}
