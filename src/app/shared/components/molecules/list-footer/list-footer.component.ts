import { Component } from '@angular/core';

@Component({
  selector: 'app-list-footer',
  templateUrl: './list-footer.component.html',
  styleUrls: ['./list-footer.component.css']
})
export class ListFooterComponent {

  menuItems1 = [
    { label: 'Sobre Nosotros', link: '#' },
    { label: 'Medicos', link: '#' },
    { label: 'Horario', link: '#' },
    { label: 'Cita', link: '#' },
    { label: 'Comentarios', link: '#' }
  ];

  menuItems2 = [
    { label: 'Contacto', link: '#' },
    { label: 'Privacidad y Política', link: '#' }
  ];

 
}
