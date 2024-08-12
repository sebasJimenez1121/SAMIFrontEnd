import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/service/auth-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imageUrl: string | null = '';
  isProfileModalOpen = false;
  showProgress: boolean = false;
  isSidebarClosed = false;
  hoveredItem: any = null;
  isMenuOpen = false;
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
}
  showTooltip(item: any) {
    if (this.isSidebarClosed) {
      this.hoveredItem = item;
    }
  }

  openProfileModal() {
    this.isProfileModalOpen = true;
  }

  closeProfileModal() {
    this.isProfileModalOpen = false;
  }

  async logout() {
    const result = await Swal.fire({
      title: '¿Está seguro?',
      text: '¿Está seguro de que desea cerrar sesión?',
      showCancelButton: true,
      confirmButtonColor: '#1F3FAE',
      cancelButtonColor: '#A32020',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'No, mantener sesión',
      reverseButtons: true
    });

    if (result.isConfirmed) {
      this.showProgress = true;
      try {
        await this.authService.logout();
        this.router.navigate(['/home']);
        Swal.fire({
          title: 'Sesión cerrada',
          text: 'Has cerrado sesión exitosamente.',
          icon: 'success',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          toast: true,
          position: 'top', 
          background:"#C6F0C2",
          iconColor:"#1C5314",
        });
      } catch (error) {
        console.error('Error durante el cierre de sesión:', error);
        Swal.fire('Error', 'Ocurrió un error al cerrar sesión.', 'error');
      } finally {
        this.showProgress = false;
      }
    }
  }
}
