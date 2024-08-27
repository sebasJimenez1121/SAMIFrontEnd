import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DoctorPublic } from '../../../../core/models/doctor.model';
import { SweetAlertService } from '../../../../core/service/sweet-alert.service';
import { StepperContainerComponent } from '../../organisms/stepper-container/stepper-container.component';

@Component({
  selector: 'app-modal-reservation-form',
  templateUrl: './modal-reservation-form.component.html',
  styleUrls: ['./modal-reservation-form.component.css']
})
export class ModalReservationFormComponent {
  @Input() isModalVisible: boolean = false;
  @Input() selectedDoctor!: DoctorPublic;

  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() modalClosed = new EventEmitter<void>(); 

  @ViewChild(StepperContainerComponent) stepperContainer!: StepperContainerComponent;

  constructor(private sweetAlert: SweetAlertService) {}

  closeModal() {
    this.sweetAlert.showConfirmation('¿Estás seguro?', 'Perderás la fecha y hora reservadas.')
      .then((result) => {
        if (result.isConfirmed) {
          this.isModalVisible = false;
          this.closeModalEvent.emit();
          this.modalClosed.emit();
          this.resetComponents();
        }
      });
  }

  resetComponents() {
    if (this.stepperContainer) {
      this.stepperContainer.resetStepper();
    }
  }

  onStepperFinished() {
    this.closeModal();
  }
}
