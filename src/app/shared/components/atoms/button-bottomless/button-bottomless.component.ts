import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-bottomless',
  templateUrl: './button-bottomless.component.html',
  styleUrls: ['./button-bottomless.component.css'] 
})

export class ButtonBottomlessComponent {
  @Input() value:string = "";
  @Output() buttonClick = new EventEmitter<void>();
  handleClick() {
    this.buttonClick.emit();
  }
}
