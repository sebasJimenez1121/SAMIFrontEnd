import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Patient } from '../../../../core/models/patient.model';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  @Input() appointmentData!: Patient; // Recibe los datos del paciente

  appointmentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      nombre: [''],
      apellido: [''],
      documento: [''],
      email: [''],
      telefono: [''],
      motivo: ['']
    });

    // Si hay datos de paciente, actualizar el formulario
    if (this.appointmentData) {
      this.appointmentForm.patchValue({
        nombre: this.appointmentData.nombre,
        apellido: this.appointmentData.apellido,
        documento: this.appointmentData.documento,
        email: this.appointmentData.email,
        telefono: this.appointmentData.telefono
      });
    }
  }

  onSubmit() {
    console.log(this.appointmentForm.value);
  }
}
