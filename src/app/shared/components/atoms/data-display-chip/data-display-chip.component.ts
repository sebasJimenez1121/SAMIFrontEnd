

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-display-chip',
  templateUrl: './data-display-chip.component.html',
  styleUrls: ['./data-display-chip.component.css']
})
export class DataDisplayChipComponent {
  @Input() chipContent!: string;
  @Input() selected: boolean = false;
  @Output() chipClick = new EventEmitter<void>();

  onChipClick() {
    this.chipClick.emit();
  }
}
