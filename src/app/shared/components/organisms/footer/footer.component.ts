import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
 listItems = [
    { icon: "../../../../../assets/icons/telefono.svg", text: "123-456-7890" },
    { icon: "../../../../../assets/icons/correo.svg", text: "SAMI@gmail.com" },
  
  ];
}