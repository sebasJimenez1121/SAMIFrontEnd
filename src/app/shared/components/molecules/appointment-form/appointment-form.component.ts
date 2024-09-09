import { Patient, updatePatient } from './../../../../core/models/patient.model';
import { Component, Input, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from '../../../../core/service/paciente.service';
import { StepperService } from '../../../../core/service/stepper.service';
import Swal from 'sweetalert2';
import { DYNAMIC_DATA } from '../../../../core/tokens/dynamic-data.token';
import { CitaService } from '../../../../core/service/cita.service';

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
    private citaService: CitaService,
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
    
      const motivoCita = formData.motivo;  // El motivo de la cita
      const documentoArchivo = formData.documentoArchivo;  // Documento cargado
      const citaId: any = localStorage.getItem('codigoCita');  // Asume que tienes el ID de la cita
      const paciente: updatePatient = {
        Id: this.patient.Id,
        Documento: formData.documento,
        Nombre: formData.nombre,
        Apellido: formData.apellido,
        Email: formData.email,
        Telefono: formData.telefono,
        Direccion: formData.direccion,
      };
    
      // Primera petición: Actualización del paciente
      this.pacienteService.actualizarPatient(paciente).subscribe(
        response => {
          console.log('Paciente actualizado');
        },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Error al actualizar paciente',
            text: 'Ocurrió un problema al intentar actualizar los datos del paciente.',
          });
        }
      );
    
      // Segunda petición: Actualizar motivo de la cita (si el motivo está presente)
      if (motivoCita) {
        this.citaService.updateMotivoCita(citaId, motivoCita).subscribe(
          response => {
            console.log('Motivo de la cita actualizado');
          },
          error => {
            Swal.fire({
              icon: 'error',
              title: 'Error al actualizar motivo',
              text: 'No se pudo actualizar el motivo de la cita.',
            });
          }
        );
      }
    
      // Tercera petición: Subir documento (si hay un archivo cargado)
      if (documentoArchivo) {
        const formData = new FormData();
        formData.append('file', documentoArchivo);
        formData.append('citaId', citaId);
    
        this.citaService.uploadDocument(formData).subscribe(
          response => {
            console.log('Documento cargado');
          },
          error => {
            Swal.fire({
              icon: 'error',
              title: 'Error al subir documento',
              text: 'No se pudo cargar el documento.',
            });
          }
        );
      }
      
      Swal.fire({
        icon: 'success',
        title: 'Datos Guardados',
        text: 'Los datos del paciente, motivo y documentos han sido actualizados correctamente.',
      });
    }
  }
}
