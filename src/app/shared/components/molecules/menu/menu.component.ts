import { Component } from '@angular/core';

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
    { name: 'Seguimento', 
      link: '/',
    subMenu: [
      { name: 'Medicamentos', link: '/agendar-cita' },
      { name: 'Notas Doctor', link: '/visualizar-cita' }
    ] 
    },
    { name: 'Médicos', link: '/doctors' },
  ];                       
}
