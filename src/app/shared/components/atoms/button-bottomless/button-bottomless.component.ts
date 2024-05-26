import { Component } from '@angular/core';

@Component({
  selector: 'app-button-bottomless',
  templateUrl: './button-bottomless.component.html',
  styleUrls: ['./button-bottomless.component.css'] 
})
export class ButtonBottomlessComponent {
  handleClick() {
    console.log('Button clicked!');
  }
}
