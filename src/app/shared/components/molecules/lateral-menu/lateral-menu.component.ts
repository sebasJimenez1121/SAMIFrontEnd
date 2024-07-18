import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.css']
})
export class LateralMenuComponent {
  @Input() menuItems = [
    { RouterLink: '/home-admin', label: 'Inicio', icon: 'assets/icons/home-2-svgrepo-com.svg' },
    { RouterLink: '/agendar-cita', label: 'Agendar Cita', icon: 'assets/icons/agendar-cita.svg' },
    { RouterLink: '/visualizar-cita', label: 'Visualizar citas pacientes', icon: 'assets/icons/pacientes.svg' },
    { RouterLink: '/crear medicos', label: 'Crear medicos', icon: 'assets/icons/crear-receta.svg' }
  ];

  @Output() actionTriggered: EventEmitter<string> = new EventEmitter();

  isSidebarClosed = false;
  selectedItem: any = null;
  hoveredItem: any = null;

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
}
