import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './core/service/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SAMI';
  isSidebarClosed = false;
  isLoginPage = false;

  constructor(public authService: AuthService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url === '/login';
        
      }
    });
  }

  ngOnInit(): void {

  }

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  showAlert(button: any) {
    Swal.fire({
      title: button.alertTitle,
      text: button.alertText,
      icon: button.alertType,
      showCancelButton: button.showCancelButton,
      confirmButtonText: button.confirmButtonText,
      cancelButtonText: button.cancelButtonText,
    });
  }
}
