import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CitaService } from '../../../../core/service/cita.service';
import { Appointment } from '../../../../core/models/appointment.model';

@Component({
  selector: 'app-tracking-record-template',
  templateUrl: './tracking-record-template.component.html',
  styleUrl: './tracking-record-template.component.css'
})
export class TrackingRecordTemplateComponent  implements OnInit {
  @Input() citas: Appointment[] = [];
  @Output() dateChange: EventEmitter<string> = new EventEmitter();
  @Output() pageChange: EventEmitter<number> = new EventEmitter();
  @Output() viewDetails: EventEmitter<Appointment> = new EventEmitter();
  @Input() titleText: string = 'Registro de Seguimiento';
  @Input() titleClass: string = 'custom-title';

  citasFiltradas: Appointment[] = [];

  showModal: boolean = false;
  selectedCita: Appointment | null = null;

  constructor(private dataService: CitaService) {}

  ngOnInit(): void {
    this.loadCitas();
  }

  loadCitas(): void {
    this.dataService.getCitas().subscribe(
      (data: Appointment[]) => {
        this.citas = data;
        this.citasFiltradas = this.citas; 
      },
      (error: any) => {
        console.error('Error loading citas:', error);
      }
    );
  }

 

  verMas(cita: Appointment): void {
    this.selectedCita = cita;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }




}
