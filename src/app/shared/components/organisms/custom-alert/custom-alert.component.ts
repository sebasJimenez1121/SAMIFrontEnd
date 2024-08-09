import { Component, Input, Output, EventEmitter } from '@angular/core';

interface AlertConfig {
  id: number;
  alertTitle: string;
  alertText: string;
  alertType: 'info' | 'success' | 'warning' | 'error' | 'question';
  showConfirmButton: boolean;
  showCancelButton: boolean;
  confirmButtonText: string;
  cancelButtonText: string;
  background?: string;
  iconColor?: string;
  iconHtml?: string;
  containerClass?: string;
}

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.css']
})
export class CustomAlertComponent {
  @Input() alertConfig: AlertConfig | null = null;
  @Output() buttonClick: EventEmitter<number | null> = new EventEmitter<number | null>();

  handleButtonClick(id: number | null): void {
    this.buttonClick.emit(id);
  }


  
}
