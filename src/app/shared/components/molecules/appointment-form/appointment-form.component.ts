import { Patient, updatePatient } from './../../../../core/models/patient.model';
import { Component, Input, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from '../../../../core/service/paciente.service';
import { StepperService } from '../../../../core/service/stepper.service';
import Swal from 'sweetalert2';
import { DYNAMIC_DATA } from '../../../../core/tokens/dynamic-data.token';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  @Output() canProceed = new EventEmitter<boolean>(); 
  @Input() patient!: Patient;
  appointmentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private pacienteService: PacienteService,
    private stepperService: StepperService,
    @Inject(DYNAMIC_DATA) private data: { patient: Patient }
  ) {
    this.patient = data.patient;
  }

  ngOnInit(): void {
    console.log("Paciente recibido: ", this.patient);
    this.initForm();

    // Suscribirse al evento del stepper para enviar datos
    this.stepperService.getSubmitStep().subscribe(() => {
      this.onSubmit();
    });
  }

  initForm() {
    this.appointmentForm = this.fb.group({
      nombre: [this.patient?.Nombre || '', Validators.required],
      apellido: [this.patient?.Apellido || '', Validators.required],
      documento: [this.patient?.Documento || '', Validators.required],
      email: [this.patient?.Email || '', [Validators.required, Validators.email]],
      telefono: [this.patient?.Telefono || '', Validators.required],
      direccion: [this.patient?.Direccion || '', Validators.required],
      motivo: [''],
      documentoArchivo: ['']
    });

    // Escuchar cambios en el formulario y enviar estado
    this.appointmentForm.statusChanges.subscribe(status => {
      const canProceed = this.appointmentForm.valid;
      this.stepperService.setCanProceed(canProceed);
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      const formData = this.appointmentForm.value;

      const movitoCita = formData.motivo;
      const file = []
      const paciente: updatePatient = {
        Id: this.patient.Id,
        Documento: formData.documento,
        Nombre: formData.nombre,
        Apellido: formData.apellido,
        Email: formData.patient,
        Telefono: formData.telefono,
        Direccion: formData.direccion,
      }

      this.pacienteService.actualizarPatient(paciente).subscribe(
        response => {
          Swal.fire({
            icon: 'success',
            title: '¡Datos Guardados!',
            text: 'Los datos del paciente han sido actualizados correctamente.',
          });
        },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Error al guardar los datos',
            text: 'Ocurrió un problema al intentar guardar los datos del paciente. Por favor, inténtalo de nuevo.',
          });
        }
      );
    }
  }
}
