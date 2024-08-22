import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})
export class ServiceCardComponent {
    @Input() titulo = "";
    @Input() img= "";
    @Input() content = "";
    @Input() link = "";
    @Input() rhef = "";
}
