import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-button-set-login-registration',
  templateUrl: './button-set-login-registration.component.html',
  styleUrl: './button-set-login-registration.component.css'
})
export class ButtonSetLoginRegistrationComponent {
  @Output() handleButtonClick(action: () => void) {
    action();
  }

  OnclickLogin(){
    console.log("hola");
  }

}
