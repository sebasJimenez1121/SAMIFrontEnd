import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button-circle',
  templateUrl: './button-circle.component.html',
  styleUrls: ['./button-circle.component.css']
})
export class ButtonCircleComponent {
  @Input() value:string = "valor";
  @Output() buttonClick = new EventEmitter<void>();
  handleClick() {
    this.buttonClick.emit();
  }
}
