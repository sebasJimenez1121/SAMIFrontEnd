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
  isHomePage = false;
  isPatient = false;

  constructor(public authService: AuthService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url === '/login';
        this.isHomePage = event.url === '/home'; 
        this.isPatient = this.authService.isPatient();
      }
    });
  }

  ngOnInit(): void {}

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  logout() {
    this.authService.logout();
  }
}
