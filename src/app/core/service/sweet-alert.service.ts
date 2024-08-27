import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {
  
  // Método para mostrar una alerta de confirmación
  showConfirmation(title: string, text: string) {
    return Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'Cancelar'
    });
  }

  // Método para mostrar una alerta de éxito
  showSuccess(title: string, text: string) {
    return Swal.fire({
      title,
      text,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  }

  // Método para mostrar una alerta de error
  showError(title: string, text: string) {
    return Swal.fire({
      title,
      text,
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
}
