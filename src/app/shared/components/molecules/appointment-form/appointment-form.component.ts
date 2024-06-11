import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit, OnChanges {
  @Input() appointmentData: any;

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
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appointmentData']) {
      this.updateForm(changes['appointmentData'].currentValue);
    }
  }

  updateForm(data: any): void {
    if (data) {
      this.appointmentForm.patchValue({
        nombre: data.nombre,
        apellido: data.apellido,
        documento: data.documento,
        email: data.email,
        telefono: data.telefono,
        motivo: data.motivo
      });
    }
  }

  onSubmit() {
    console.log(this.appointmentForm.value);
  }
}
