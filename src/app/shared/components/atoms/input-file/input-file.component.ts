import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrl: './input-file.component.css'
})
export class InputFileComponent {
  fileName: string = '';
  @Input() value: string = '';
 

 
  
  triggerFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLElement;
    fileInput.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileName = Array.from(input.files).map(file => file.name).join(', ');
    }
  }
  
  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value = inputValue;
}
}