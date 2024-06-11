import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Doctor } from '../../../../core/models/doctor.model';

@Component({
  selector: 'app-modal-reservation-form',
  templateUrl: './modal-reservation-form.component.html',
  styleUrls: ['./modal-reservation-form.component.css']
})
export class ModalReservationFormComponent {
  @Input() isModalVisible: boolean = false;
  @Input() selectedDoctor: Doctor | null = null;
  

  @Output() closeModalEvent = new EventEmitter<void>();

  steps: string[] = ['Fecha y Hora', 'Datos Personales', 'Método De Pago', 'Confirmación'];
  currentStep: number = 0;
  stepData: any[] = [];

  constructor() {}

  get doctorOrDefault(): Doctor {
    return this.selectedDoctor || {  
      id: 0,
      name: '',
      apellido: '',
      specialtyId: 0,
      specialtyName: '',
      rating: 0,
      rol: '',
      img: '',
      appointmentCost: 0 };
  }

  closeModal() {
    this.isModalVisible = false;
    this.closeModalEvent.emit();
  }

  handlePrevClick() {
    // Lógica para manejar el botón de "Atrás"
  }

  handleNextClick() {
    // Lógica para manejar el botón de "Continuar"
  }

  onStepChanged(step: number) {
    this.currentStep = step;
    // Puedes agregar lógica adicional aquí si es necesario
  }

  onFinished() {
    alert('¡Todos los pasos completados!');
    this.closeModal();
  }

  handleSelectionMade(selection: { date: Date, time: string }) {
    this.stepData[this.currentStep] = selection;
    this.currentStep++;
  }
}
