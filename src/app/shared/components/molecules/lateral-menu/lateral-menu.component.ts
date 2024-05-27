
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrl: './lateral-menu.component.css'
})
export class LateralMenuComponent {
  @Input() menuItems = [
    { link: '/home', label: 'Inicio', icon: 'assets/icons/home.svg' },
    { link: '/agenda', label: 'Agenda de Citas', icon: 'assets/icons/agenda.svg' },
    { link: '/historia', label: 'Historia Clínica', icon: 'assets/icons/historia.svg' },
    { link: '/pacientes', label: 'Agenda de Pacientes', icon: 'assets/icons/pacientes.svg' },
    { link: '/recetas', label: 'Crear Receta', icon: 'assets/icons/receta.svg' },
 
  ];

  isSidebarClosed = false;
  selectedItem: any = null;

  selectMenuItem(item: any) {
    this.selectedItem = item;
  }
}
