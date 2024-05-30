import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-set-buttons',
  templateUrl: './set-buttons.component.html',
  styleUrl: './set-buttons.component.css'
})
export class SetButtonsComponent {
 @Input() value:string = "valor" 
  handleClick() {
    console.log('Button clicked!');
  }
}
