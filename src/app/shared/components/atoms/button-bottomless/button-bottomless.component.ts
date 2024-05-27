import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-bottomless',
  templateUrl: './button-bottomless.component.html',
  styleUrls: ['./button-bottomless.component.css'] 
})
export class ButtonBottomlessComponent {
  @Input() value:string = "valor" 
  handleClick() {
    console.log('Button clicked!');
  }
}
