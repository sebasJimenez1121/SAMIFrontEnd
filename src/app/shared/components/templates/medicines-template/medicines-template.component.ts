import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CitaService } from '../../../../core/service/cita.service';
import { Appointment } from '../../../../core/models/appointment.model';

@Component({
  selector: 'app-medicines-template',
  templateUrl: './medicines-template.component.html',
  styleUrl: './medicines-template.component.css'
})
export class MedicinesTemplateComponent  implements OnInit {
  @Input() citas: Appointment[] = [];
  @Output() dateChange: EventEmitter<string> = new EventEmitter();
  @Output() pageChange: EventEmitter<number> = new EventEmitter();
  @Output() viewDetails: EventEmitter<Appointment> = new EventEmitter();
  @Input() titleText: string = 'Recordatorio Medicamentos';
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
