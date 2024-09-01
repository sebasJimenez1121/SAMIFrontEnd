import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems = [
    { name: 'Inicio', link: '/home' },
    { 
      name: 'Citas', 
      link: '/gestion-cita', 
      subMenu: [
        { name: 'Agendar Cita', link: '/agendar-cita' }, 
        { name: 'Visualizar Cita', link: '/visualizar-cita' } 
      ]
    },
    { 
      name: 'Seguimiento',  
      link: '/registro-seguimiento', 
      subMenu: [
        { name: 'Medicamentos', link: '/Medicamentos' },
        { name: 'Registro de seguimiento', link: '/registro-seguimiento' } 
      ] 
    },
    { name: 'Médicos', link: '/doctors-profiles' },
  ];

  isMenuCollapsed = true;

  constructor(private router: Router) {}

  navigate(link: string, event: MouseEvent) {
    event.stopPropagation();
    if (link) {
      this.router.navigate([link]);
    }
    this.toggleMenu(); 
  }

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
