import { Component, Inject, Input, OnInit } from '@angular/core';
import { DoctorPublic } from '../../../../core/models/doctor.model';
import { Patient } from '../../../../core/models/patient.model';
import { DYNAMIC_DATA } from '../../../../core/tokens/dynamic-data.token';
import { CitaService } from '../../../../core/service/cita.service';

@Component({
  selector: 'app-visualizar-cita',
  templateUrl: './visualizar-cita.component.html',
  styleUrls: ['./visualizar-cita.component.css']
})
export class VisualizarCitaComponent implements OnInit {
  doctor: DoctorPublic;
  patient: Patient;

  paymentMethod: string = '';  // Método de pago que recuperaremos de localStorage
  selectedDate: string = '';   // Fecha seleccionada desde localStorage
  selectedTime: string = '';   // Hora seleccionada desde localStorage
  isLoading: boolean = true;   // Indicador de carga
  codigoCita: string = '';

  constructor(
    @Inject(DYNAMIC_DATA) private data: { doctor: DoctorPublic, patient: Patient },
    private citaService: CitaService
  ){
      this.doctor = data.doctor;
      this.patient = data.patient;
  }

  ngOnInit(): void {
    this.loadAppointmentData();
  }

  loadAppointmentData(): void {
    // Cargar los datos de localStorage
    const storedDate = localStorage.getItem('selectedDate');
    const storedTime = localStorage.getItem('selectedTime');
    const storedPaymentMethod = localStorage.getItem('paymentMethod');
    const codigoCita = localStorage.getItem('codigoCita');

    // Verificar que existan los valores en localStorage
    if (storedDate && storedTime && storedPaymentMethod && codigoCita) {
      this.selectedDate = storedDate;
      this.selectedTime = storedTime;
      this.paymentMethod = storedPaymentMethod;
      this.codigoCita = codigoCita;
    } else {
      console.error('No se encontraron todos los datos necesarios en el localStorage');
    }
  }

  onConfirm() {
    console.log('Cita confirmada');
  }
}
