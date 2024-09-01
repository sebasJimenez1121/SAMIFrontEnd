import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() headers: string[] = [];
  @Input() rows: any[] = [];
  @Input() value: string = "";
  @Output() actionClick = new EventEmitter<number>();

  onActionClick(id: number) {
    this.actionClick.emit(id);
  }
}
