import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CitaService } from '../../../../core/service/cita.service';
import { Appointment } from '../../../../core/models/appointment.model';

@Component({
  selector: 'app-historial-cita-template',
  templateUrl: './historial-cita-template.component.html',
  styleUrls: ['./historial-cita-template.component.css']
})
export class HistorialCitaTemplateComponent implements OnInit {
  @Input() citas: Appointment[] = [];
  @Output() dateChange: EventEmitter<string> = new EventEmitter();
  @Output() pageChange: EventEmitter<number> = new EventEmitter();
  @Output() viewDetails: EventEmitter<Appointment> = new EventEmitter();
  @Input() titleText: string = 'Visualización De Citas';
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
        this.citasFiltradas = this.citas; // Aseguramos que las citas filtradas también se inicialicen correctamente
      },
      (error: any) => {
        console.error('Error loading citas:', error);
      }
    );
  }

  filtrarCitas(event: any): void {
    const fecha = event.target.value;
    this.citasFiltradas = this.citas.filter(cita => cita.fechaCita.startsWith(fecha)); // Filtrar por fecha (ej. 2024-06-04)
  }

  verMas(cita: Appointment): void {
    this.selectedCita = cita;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  obtenerClaseCirculo(estado: string): string {
    switch (estado) {
      case 'Agendada':
        return 'circulo-activo';
      case 'Cancelada':
        return 'circulo-inactivo';
      default:
        return '';
    }
  }

  traducirEstado(estado: string): string {
    switch (estado) {
      case 'Pendiente': return 'Pendiente';
      case 'Completado': return 'Completado';
      case 'Cancelado': return 'Cancelado';
      default: return estado;
    }
  }

  cancelarCita(id: number): void {
    this.dataService.cancelarCita(id).subscribe(() => {
      const cita = this.citas.find(c => c.codigoCita === id);
      if (cita) {
        cita.estadoCita = 'Cancelada';
        this.citasFiltradas = this.citasFiltradas.map(c => c.codigoCita === id ? { ...c, estado: 'Cancelada' } : c);
      }
    });
  }
}
