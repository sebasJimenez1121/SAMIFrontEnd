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
      name: 'Servicios', 
      link: '', 
      subMenu: [
        { name: 'Gestión de citas', link: '/services/appointments' },
        { name: 'Registro de seguimiento', link: '/services/tracking' },
        { name: 'Recordatorios de medicación personalizados', link: '/services/reminders' }
      ] 
    },
    { name: 'Médicos', link: '/doctors' },
    { name: 'Contacto', link: '/contact' }
  ];            
}
