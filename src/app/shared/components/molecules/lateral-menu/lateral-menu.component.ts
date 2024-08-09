import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/service/auth-service.service'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.css']
})
export class LateralMenuComponent {
  @Input() menuItems = [
    { RouterLink: '/home-admin', label: 'Inicio', icon: 'assets/icons/home-2-svgrepo-com.svg' },
    { RouterLink: '/agendar-cita-admin', label: 'Agendar Cita', icon: 'assets/icons/agendar-cita.svg' },
    { RouterLink: '/visualizar-cita', label: 'Visualizar citas pacientes', icon: 'assets/icons/pacientes.svg' },
    { RouterLink: '/register-doctor', label: 'Crear medicos', icon: 'assets/icons/crear-receta.svg' }
  ];

  @Output() actionTriggered: EventEmitter<string> = new EventEmitter();

  isSidebarClosed = false;
  selectedItem: any = null;
  hoveredItem: any = null;
  showProgress: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  selectMenuItem(item: any) {
    this.selectedItem = item;
    if (item.action) {
      this.actionTriggered.emit(item.action);
    }
  }

  iconClick(event: Event) {
    event.stopPropagation();
    this.toggleSidebar();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  showTooltip(item: any) {
    if (this.isSidebarClosed) {
      this.hoveredItem = item;
    }
  }

  hideTooltip() {
    this.hoveredItem = null;
  }

  async logout() {
    const result = await Swal.fire({
      title: '¿Está seguro?',
      text: '¿Está seguro de que desea cerrar sesión?',
      showCancelButton: true,
      confirmButtonColor: '#1F3FAE',
      cancelButtonColor: '#A32020',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'No, mantener sesión',
      reverseButtons: true
    });

    if (result.isConfirmed) {
      this.showProgress = true;
      try {
        await this.authService.logout();
        this.router.navigate(['/home']);
        Swal.fire({
          title: 'Sesión cerrada',
          text: 'Has cerrado sesión exitosamente.',
          icon: 'success',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          toast: true,
          position: 'top', 
          background:"#C6F0C2",
          iconColor:"#1C5314",
        });
      } catch (error) {
        console.error('Error durante el cierre de sesión:', error);
        Swal.fire('Error', 'Ocurrió un error al cerrar sesión.', 'error');
      } finally {
        this.showProgress = false;
      }
    }
  }
}
