import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DataService } from '../../../../core/service/servicioPaciente';

@Component({
  selector: 'app-appointment-modal',
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.css']
})
export class AppointmentModalComponent implements OnInit {
  @Input() showModal: boolean = false;

  @Output() patientNameChange = new EventEmitter<string>();
  @Output() patientDocumentChange = new EventEmitter<string>();
  @Output() patientPhoneChange = new EventEmitter<string>();
  @Input() insertedDocuments: File[] = [];
  @Output() insertedDocumentsChange = new EventEmitter<File[]>();
  @Output() appointmentValueChange = new EventEmitter<string>();
  @Output() appointmentReasonChange = new EventEmitter<string>();

  // Datos que se cargarán desde el servicio
  doctorName: string = '';
  doctorSpecialty: string = '';
  patientName: string = '';
  patientDocument: string = '';
  patientPhone: string = '';
  appointmentValue: string = '';
  appointmentReason: string = '';

  // Nueva propiedad fileName
  fileName: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.getData().subscribe(data => {
      this.doctorName = data.doctorName;
      this.doctorSpecialty = data.doctorSpecialty;
      this.patientName = data.patientName;
      this.patientDocument = data.patientDocument;
      this.patientPhone = data.patientPhone;
      this.appointmentValue = data.appointmentValue;
      this.appointmentReason = data.appointmentReason;
    });
  }

  closeModal(): void {
    this.showModal = false;
  }

  cancelAppointment(): void {
    this.showModal = false;
  }

  rescheduleAppointment(): void {
    // Lógica para reagendar la cita
  }

  triggerFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLElement;
    fileInput.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileName = Array.from(input.files).map(file => file.name).join(', ');
    }
  }
}












