import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Patient } from '../../../../core/models/patient.model';
import { PacienteService } from '../../../../core/service/paciente.service'; // Asegúrate de importar el servicio correctamente

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  @Input() appointmentData!: Patient; // Recibe los datos del paciente

  appointmentForm!: FormGroup; 

  constructor(
    private fb: FormBuilder,
    private pacienteService: PacienteService // Inyecta el servicio
  ) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      nombre: [''],
      apellido: [''],
      documento: [''],
      email: [''],
      telefono: [''],
      direccion: [''],
      motivo: ['']
    });

    // Obtener el paciente por ID y actualizar el formulario
    this.pacienteService.getPatientById().subscribe(
      response => {
        const patient = response.patient;
        this.appointmentForm.patchValue({
          documento: patient.Documento,
          nombre: patient.Nombre,
          apellido: patient.Apellido,
          email: patient.Email,
          telefono: patient.Telefono
        });
      },
      error => {
        console.error('Error al obtener el paciente', error);
      }
    );
  }

  onSubmit() {
    console.log(this.appointmentForm.value);
  }
}
