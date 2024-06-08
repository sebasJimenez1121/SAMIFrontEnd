import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() isVisible: boolean = false;

  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal() {
    this.isVisible = false;
    this.closeModalEvent.emit();
  }
}
