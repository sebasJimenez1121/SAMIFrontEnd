import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Patient } from '../../../../core/models/patient.model';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  @Input() appointmentData!: Patient;
  @Output() formDataReady = new EventEmitter<any>(); // Evento para emitir los datos del formulario

  appointmentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Configurar el formulario
    this.appointmentForm = this.fb.group({
      // Definir los campos del formulario
    });
  }

  onSubmit() {
    // Emitir los datos del formulario cuando se envíe
    this.formDataReady.emit(this.appointmentForm.value);
  }
}
