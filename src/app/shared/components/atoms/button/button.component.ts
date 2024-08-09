import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() value: string = "valor";
  @Input() width: string = ''; 
  @Input() isDisabled: boolean = false;
  @Output() buttonClick = new EventEmitter<void>();

  handleClick() {
    if (!this.isDisabled) {
      this.buttonClick.emit();
    }
  }
}
