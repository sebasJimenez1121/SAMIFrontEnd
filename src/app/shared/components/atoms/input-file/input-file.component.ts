import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrl: './input-file.component.css'
})
export class InputFileComponent {
  @Input() multiple: boolean = false;
  @Output() filesSelected: EventEmitter<File[]> = new EventEmitter<File[]>();
  @Input() fileName: string = '';

  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.fileName = Array.from(event.target.files).map((file: any) => file.name).join(', ');
      this.filesSelected.emit(event.target.files);
    } else {
      this.fileName = '';
      this.filesSelected.emit([]);
    }
  }

  triggerFileInput(): void {
    const fileInput = document.getElementById('fileInput') as HTMLElement;
    fileInput.click();
  }
}