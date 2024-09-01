import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DoctorPublic } from '../../../../core/models/doctor.model';
import { Patient } from '../../../../core/models/patient.model';

@Component({
  selector: 'app-visualizar-cita',
  templateUrl: './visualizar-cita.component.html',
  styleUrls: ['./visualizar-cita.component.css']
})
export class VisualizarCitaComponent {
  @Input() doctor!: DoctorPublic;
  @Input() patient!: Patient;
  @Input() date!: string;
  @Input() time!: string;
  @Input() motivo!: string;
  @Input() paymentMethod!: string;
  @Input() paymentStatus: string = 'Pago';

  @Output() confirmAppointment = new EventEmitter<void>();

  onConfirm() {
    this.confirmAppointment.emit();
  }
}
