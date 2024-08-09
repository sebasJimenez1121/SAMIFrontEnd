import { Component,Output } from '@angular/core';

@Component({
  selector: 'app-button-price',
  templateUrl: './button-price.component.html',
  styleUrl: './button-price.component.css'
})
export class ButtonPriceComponent {
  @Output() handleButtonClick(action: () => void) {
    action();
  }

  OnclickLogin(){
    console.log("hola");
  }
}
