import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../../../core/service/cita.service';

@Component({
  selector: 'app-historial-cita-template',
  templateUrl: './historial-cita-template.component.html',
  styleUrls: ['./historial-cita-template.component.css']
})
export class HistorialCitaTemplateComponent implements OnInit {
  citas: any[] = [];
  citasFiltradas: any[] = [];
  showModal: boolean = false;
  showRescheduleModal: boolean = false; 
  selectedCita: any = null;

  constructor(private dataService: CitaService) {}

  ngOnInit(): void {
    this.dataService.getCitas().subscribe(data => {
      this.citas = data;
      this.citasFiltradas = data;
    });
  }

  filtrarCitas(event: any): void {
    const fecha = event.target.value;
    this.citasFiltradas = this.citas.filter(cita => cita.fecha === fecha);
  }

  verMas(cita: any): void {
    this.selectedCita = cita;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  rescheduleAppointment(): void {
    this.showModal = false;
    this.showRescheduleModal = true; 
  }

  onReagendar(fecha: Date): void {
    if (this.selectedCita) {
      const citaId = this.selectedCita.id;
      this.dataService.guardarFechaSeleccionada(fecha.toISOString(), citaId).subscribe(() => {
        this.showRescheduleModal = false;
        this.filtrarCitas({ target: { value: fecha.toISOString().split('T')[0] } });
      });
    }
  }

  obtenerClaseEstado(estado: string): string {
    switch (estado) {
      case 'Pendiente': return 'estado-pendiente';
      case 'Completado': return 'estado-completado';
      case 'Cancelado': return 'estado-cancelado';
      default: return '';
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
}
