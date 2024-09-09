import { Component, Inject } from '@angular/core';
import { PagoService } from '../../../../core/service/pago.service';
import { DoctorPublic } from '../../../../core/models/doctor.model';
import { Patient } from '../../../../core/models/patient.model';
import { DYNAMIC_DATA } from '../../../../core/tokens/dynamic-data.token';
import { StepperService } from '../../../../core/service/stepper.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-button-price',
  templateUrl: './button-price.component.html',
  styleUrls: ['./button-price.component.css']
})
export class ButtonPriceComponent {
  doctor!: DoctorPublic;
  patient!: Patient;
  transactionResult?: any;
  codigoCita: any = localStorage.getItem('codigoCita');

  constructor(
    @Inject(DYNAMIC_DATA) private data: { doctor: DoctorPublic; patient: Patient },
    private pagoService: PagoService,
    private stepperService: StepperService
  ) {
    this.doctor = data.doctor;
    this.patient = data.patient;
  }

  // Manejar el pago en efectivo
  pagarEnEfectivo() {
    const pagoData = {
      metodo: 'efectivo',
      FKCodigoCita: this.codigoCita,
      valor: this.doctor.valorCita,
      descripcion: `Pago por cita con el doctor ${this.doctor.nombre} por un valor de ${this.doctor.valorCita}`,
    };

    // Guardar el método de pago en localStorage
    localStorage.setItem('metodoPago', 'efectivo');

    this.pagoService.registrarPago(pagoData).subscribe(
      response => {
        this.transactionResult = response;
        this.stepperService.emitStepCompleted(); // Emite el evento para avanzar
        Swal.fire('Pago en efectivo', 'El pago se ha registrado exitosamente', 'success');
      },
      error => {
        console.error('Error al registrar el pago en efectivo:', error);
        Swal.fire('Error', 'Hubo un problema al procesar el pago', 'error');
      }
    );
  }

  // Manejar el pago completado con ePayco
  handleTransactionCompleted(response: any) {
    this.transactionResult = response;

    if (response.status === 'success') {
      // Guardar el método de pago en localStorage
      localStorage.setItem('metodoPago', 'ePayco');

      this.stepperService.emitStepCompleted();
      Swal.fire('Pago con ePayco', 'El pago se ha procesado exitosamente', 'success');
    } else {
      Swal.fire('Error en el pago', 'El pago no fue exitoso', 'error');
    }
  }
}
