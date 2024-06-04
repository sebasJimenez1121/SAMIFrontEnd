import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../../../core/service/medico.service';

interface Medico {
  medico: string;
  imagenMedico: string;
  especialidad: string;
  paciente: string;
  estado: string;
  fechaAgendamiento: string;
}

@Component({
  selector: 'app-historial-cita-template',
  templateUrl: './historial-cita-template.component.html',
  styleUrls: ['./historial-cita-template.component.css']
})
export class HistorialCitaTemplateComponent implements OnInit {
  citas: Medico[] = [];
  citasFiltradas: Medico[] = [];
  usuarioId: string = '12345'; 
  selectedFecha: string = '';

  constructor(private medicoService: MedicoService) { }

  ngOnInit(): void {
    this.medicoService.getCitasByUsuario(this.usuarioId).subscribe((data: Medico[]) => {
      this.citas = data;
      this.citasFiltradas = data; 
    }, error => {
      console.error('Error fetching medicos', error);
    });
  }

  obtenerClaseEstado(estado: string): string {
    switch (estado) {
      case 'Active':
        return 'estado-activo';
      case 'Inactive':
        return 'estado-inactivo';
      default:
        return '';
    }
  }

  traducirEstado(estado: string): string {
    switch (estado) {
      case 'Active':
        return 'Activo';
      case 'Inactive':
        return 'Inactivo';
      default:
        return estado;
    }
  }

  verMas(cita: Medico) {
    console.log('Ver más detalles de:', cita);
    // lógica para ver más detalles
  }

  filtrarCitas(event: Event) {
    const input = event.target as HTMLInputElement;
    const fecha = input.value;
    this.selectedFecha = fecha;
    this.citasFiltradas = this.citas.filter(cita => {
      const fechaFiltrada = this.selectedFecha ? cita.fechaAgendamiento === this.selectedFecha : true;
      return fechaFiltrada;
    });
  }
}
