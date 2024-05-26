import { Component } from '@angular/core';

@Component({
  selector: 'app-button-circle',
  templateUrl: './button-circle.component.html',
  styleUrls: ['./button-circle.component.css']
})
export class ButtonCircleComponent {
  handleClick() {
    console.log('Button clicked!');
  }
}
