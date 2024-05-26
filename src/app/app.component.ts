import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SAMI';
  myBadgeCount: number[] = []; 
  userImageUrl: string | null = 'https://img.freepik.com/foto-gratis/mujer-senala-al-frente-como-si-estuviera-dirigiendo-persona-que-elige-sonriendo-ampliamente-siendo-amigable-agradable-haciendo-eleccion-o-saludando-amigo-posando-sudadera-calida-acogedora-sobre-pared-gris_176420-35764.jpg'; 
  selectedChip: string | null = null;

  specialties = [
    { name: 'otros', route: '/specialty/otros' },
    { name: 'spicologia', route: '/specialty/spicologia' },
    { name: 'pediatria', route: '/specialty/pediatria' },
    { name: 'odontologia', route: '/specialty/odontologia' },
    { name: 'dermatologia', route: '/specialty/dermatologia' }
  ];

  constructor(private router: Router) {}

  onChipClick(specialty: string, route: string) {
    this.selectedChip = specialty;
    this.router.navigate([route]);
  }

  isSelected(specialty: string): boolean {
    return this.selectedChip === specialty;
  }
}
