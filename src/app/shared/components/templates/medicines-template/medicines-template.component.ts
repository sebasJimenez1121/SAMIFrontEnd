import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecordatorioService } from '../../../../core/service/Recordatorio.service';
import { Appointment, Recordatorio } from '../../../../core/models/appointment.model';

@Component({
  selector: 'app-medicines-template',
  templateUrl: './medicines-template.component.html',
  styleUrls: ['./medicines-template.component.css']
})
export class MedicinesTemplateComponent {

  citasFiltradas: Recordatorio[] = [
    {
      codigoRec: 1,
      fechaReceta: '2024-09-20',
      medicamentoNom: 'Paracetamol',
      emailPac: 'paciente1@example.com',
      descripcionMed: 'Tomar 1 pastilla cada 8 horas',
      fechaIncio: '2024-09-21',
      fechaFin: '2024-09-27',
      horaInicio: '08:00',
      intervalo: 8,
      estado: 'Pendiente',
      fkCodigoCita: 101
    },
    {
      codigoRec: 2,
      fechaReceta: '2024-09-18',
      medicamentoNom: 'Ibuprofeno',
      emailPac: 'paciente2@example.com',
      fechaIncio: '2024-09-19',
      fechaFin: '2024-09-25',
      horaInicio: '09:00',
      intervalo: 6,
      estado: 'En curso',
      fkCodigoCita: 102
    }
  ];
  showForm: boolean = false;
  selectedCita: Appointment | null = null;
  form: FormGroup;

  @Input() titleText: string = 'Recordatorio Medicamentos';
  @Input() titleClass: string = 'custom-title';

  constructor(private fb: FormBuilder, private recordatorioService: RecordatorioService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      dosis: ['', Validators.required],
      frecuencia: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      hora: ['', Validators.required],
      descripcion: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  toggleRecordatorio(cita: Recordatorio, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      // Lógica para activar el recordatorio
      console.log(`Activando recordatorio para: ${cita.medicamentoNom}`);
      // Aquí puedes agregar la lógica para programar el recordatorio
      // this.recordatorioService.programarRecordatorio(cita); // Descomenta y ajusta según sea necesario
    } else {
      // Lógica para desactivar el recordatorio
      console.log(`Desactivando recordatorio para: ${cita.medicamentoNom}`);
      // Aquí puedes agregar la lógica para desactivar el recordatorio
    }
  }
  
  onShow(cita: Recordatorio) {
    console.log(cita);
    
  }

  closeForm() {
    this.showForm = false;
  }

  programar() {
    if (this.form.valid) {
      const recordatorio = {
        ...this.form.value,
        id: 0,
        enviado: false
      };

      this.recordatorioService.programarRecordatorio(recordatorio).subscribe({
        next: () => {
          alert('Recordatorio programado exitosamente');
          this.closeForm();
        },
        error: (err) => {
          console.error('Error al programar recordatorio', err);
        }
      });
    }
  }
}
