import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']  
})
export class ButtonComponent {
  @Input() value:string = "valor" 
  handleClick() {
    console.log('Button clicked!');
  }
}
