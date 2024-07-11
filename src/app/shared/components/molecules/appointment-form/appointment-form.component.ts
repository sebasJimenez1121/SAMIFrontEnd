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
        firstName: this.appointmentData.firstName,
        lastName: this.appointmentData.lastName,
        email:this.appointmentData.email,
        documentNumber: this.appointmentData.documentNumber,
        documentType: this.appointmentData.documentType,
        phone: this.appointmentData.phone,
        password: this.appointmentData.password,
        acceptTerms: this.appointmentData.acceptTerms
      });
    }
  }

  onSubmit() {
    console.log(this.appointmentForm.value);
  }
}
