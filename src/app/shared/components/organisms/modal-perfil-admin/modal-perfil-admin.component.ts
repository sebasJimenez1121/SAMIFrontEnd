import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-perfil-admin',
  templateUrl: './modal-perfil-admin.component.html',
  styleUrl: './modal-perfil-admin.component.css'
})
export class ModalPerfilAdminComponent {
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
