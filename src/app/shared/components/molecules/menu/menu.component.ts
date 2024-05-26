import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems = [
    { name: 'Inicio', link: '#' },
    { name: 'Servicios', link: '#' },
    { name: 'Medicos', link: '#' },
    { name: 'Contacto', link: '#' }
  ];
}
