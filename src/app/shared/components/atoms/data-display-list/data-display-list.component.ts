import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-display-list',
  templateUrl: './data-display-list.component.html',
  styleUrls: ['./data-display-list.component.css']
})
export class DataDisplayListComponent {
  @Input() listItems: { icon: string, text: string }[] = [];
  
}
