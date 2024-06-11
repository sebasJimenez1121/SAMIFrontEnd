import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../../../../core/service/cita.service';
import { Appointment } from '../../../../../core/models/appointment.model';

@Component({
  selector: 'app-pages-visualizar-cita',
  templateUrl: './pages-visualizar-cita.component.html',
  styleUrls: ['./pages-visualizar-cita.component.css']
})
export class PagesVisualizarCitaComponent implements OnInit {
  citas: Appointment[] = [];
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
      },
      (error: any) => {
        console.error('Error loading citas:', error);
      }
    );
  }

  openModal(cita: Appointment): void {
    this.selectedCita = cita;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
}
