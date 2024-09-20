import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-appointment-management-template',
  templateUrl: './appointment-management-template.component.html',
  styleUrl: './appointment-management-template.component.css'
})
export class AppointmentManagementTemplateComponent {
  @Input() titleText: string = 'Gestión de Citas';
  @Input() titleClass: string = 'custom-title';
}
