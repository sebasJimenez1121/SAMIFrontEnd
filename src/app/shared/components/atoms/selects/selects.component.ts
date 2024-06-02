import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.css']
})
export class SelectsComponent {
  selectedDocumentType: string = '';

  onDocumentTypeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedDocumentType = selectElement.value;
    console.log('Selected document type:', this.selectedDocumentType);
  }
}
