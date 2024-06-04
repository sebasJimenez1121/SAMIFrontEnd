import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SAMI';
 
  selectedChip: string | null = null;
  
  specialties = [
    { name: 'otros', route: '/specialty/otros' },
    { name: 'spicologia', route: '/specialty/spicologia' },
    { name: 'pediatria', route: '/specialty/pediatria' },
    { name: 'odontologia', route: '/specialty/odontologia' },
    { name: 'dermatologia', route: '/specialty/dermatologia' }
  ];
  menuItems = [
    { label: 'Home', link: '/home', iconClass: 'fa fa-home' },
    { label: 'Messages', link: '/messages', iconClass: 'fa fa-envelope' },
    { label: 'Settings', link: '/settings', iconClass: 'fa fa-cog' }
   
  ];
  
  constructor(private router: Router) {}

  userImageUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = e => this.userImageUrl = reader.result;
      reader.readAsDataURL(file);
    }
  }

  onAvatarClick(): void {
    // Lógica para redirigir al perfil del usuario
  }

  onChipClick(specialty: string, route: string) {
    this.selectedChip = specialty;
    this.router.navigate([route]);
  }

  isSelected(specialty: string): boolean {
    return this.selectedChip === specialty;
  }
  
 
}
