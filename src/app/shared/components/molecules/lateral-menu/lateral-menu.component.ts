import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.css']
})
export class LateralMenuComponent {
  @Input() menuItems = [
    { RouterLink: '/home', label: 'Inicio', icon: 'assets/icons/home-2-svgrepo-com.svg' },
    { RouterLink: '/agenda', label: 'Agenda de Citas', icon: 'assets/icons/agendar-cita.svg' },
    { RouterLink: '/pacientes', label: 'Agenda de Pacientes', icon: 'assets/icons/pacientes.svg' },
    { RouterLink: '/historia', label: 'Historia Clínica', icon: 'assets/icons/historia-clinica.svg' },
    { RouterLink: '/recetas', label: 'Crear Receta', icon: 'assets/icons/crear-receta.svg' }
  ];

  isSidebarClosed = false;
  selectedItem: any = null;
  hoveredItem: any = null;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  selectMenuItem(item: any) {
    this.selectedItem = item;
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
}
