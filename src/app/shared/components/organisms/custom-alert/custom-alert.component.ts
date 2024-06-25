import { Component, Input } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.css']
})
export class CustomAlertComponent {

  @Input() alertType: 'info' | 'success' | 'warning' | 'error' = 'info';
  @Input() title: string = 'Alert title';
  @Input() text: string = 'Alert description';
  @Input() showConfirmButton: boolean = true;
  @Input() showCancelButton: boolean = false;
  @Input() confirmButtonText: string = 'OK';
  @Input() cancelButtonText: string = 'Cancel';

  showAlert() {
    Swal.fire({
      title: this.title,
      text: this.text,
      icon: this.alertType,
      showCancelButton: this.showCancelButton,
      confirmButtonText: this.confirmButtonText,
      cancelButtonText: this.cancelButtonText,
    });
  }
}
