import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-display-badge',
  templateUrl: './data-display-badge.component.html',
  styleUrls: ['./data-display-badge.component.css']
})
export class DataDisplayBadgeComponent {
  @Input() badgeContent: number[] = [];
}