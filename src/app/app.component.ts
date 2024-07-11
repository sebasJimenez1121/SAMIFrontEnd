import { Component, OnInit } from '@angular/core';
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
  userRole: string = '';
  alertButtons = [
    {
      id: 1,
   
        title: 'Success alert',
        text: 'Lorem ipsum dolor sit amet constrectum adipisicng lorem ipsum dolor sit amet consrectumis adipisingus.',
        icon: 'uccess',
        button: 'OK',
        className: 'weet-alert-success',
        closeOnClickOutside: false,
        closeOnEsc: false
  
    },
    {
      id: 2,
      buttonText: 'Error Alert',
      alertTitle: 'Error',
      alertText: 'Something went wrong!',
      alertType: 'error',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Retry',
      cancelButtonText: 'Cancel'
    },
    {
      id: 3,
      buttonText: 'Warning Alert',
      alertTitle: 'Warning',
      alertText: 'Are you sure you want to proceed?',
      alertType: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }
  ];

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.fetchToken(2, 'patient').subscribe(role => {
      this.authService.setUserRole(role);
      this.userRole = role;
    });
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
