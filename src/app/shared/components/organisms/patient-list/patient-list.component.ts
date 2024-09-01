import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../../core/service/paciente.service';
import { Patient } from '../../../../core/models/patient.model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  headers = ['Paciente', 'Documento', 'Email', 'Estado', 'Acciones'];
  patients: any[] = [];

  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {
    this.pacienteService.getPatients().subscribe(
      (response: any) => {
        const patientsData = response.patients; 
        if (Array.isArray(patientsData)) {
          this.patients = patientsData.map(patient => ({
            Paciente: `${patient.Nombre} ${patient.Apellido}`,
            Documento: patient.Documento,
            Email: patient.Email,
            Estado: patient.Estado,
            Acciones: patient.Id
          }));
        }
      },
      (error) => {
        console.error('Error al cargar los pacientes:', error);
      }
    );
  }
  
  verMas(id: number) {
    console.log('Ver más sobre el paciente con ID:', id);
  }
}
