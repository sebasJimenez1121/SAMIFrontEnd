import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-doctor-admin',
  templateUrl: './footer-doctor-admin.component.html',
  styleUrl: './footer-doctor-admin.component.css'
})
export class FooterDoctorAdminComponent {
  listItems = [
    { icon: "../../../../../assets/icons/telefono.svg", text: "123-456-7890" },
    { icon: "../../../../../assets/icons/correo.svg", text: "SAMI@gmail.com" },
  
  ];
}
