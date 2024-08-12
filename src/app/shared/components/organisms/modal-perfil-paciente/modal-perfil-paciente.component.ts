
import { Component, Output, EventEmitter } from '@angular/core';
import { PacienteService } from '../../../../core/service/paciente.service';
import { Patient } from '../../../../core/models/patient.model';

@Component({
  selector: 'app-modal-perfil-paciente',
  templateUrl: './modal-perfil-paciente.component.html',
  styleUrls: ['./modal-perfil-paciente.component.css']
})
export class ModalPerfilPacienteComponent  { 
  @Output() close = new EventEmitter<void>();

  PacienteProfile: Patient = {
    Id: '',
    Documento: '',
    Tipo_Doc:'',
    Nombre: '',
    Apellido: '',
    Email:'',
    Password:'',
    Fecha_Nac: new Date(),
    Rol:'',
    Fecha_Reg: new Date(),
    Direccion: '',
    Telefono: '',
    Foto_Url: ''
  };
  
  isEditing: boolean = false;
  confirmPassword: string = '';

  constructor(private pacienteService: PacienteService) {}

  closeModal() {
    this.close.emit();
  }

  ngOnInit(): void {
    this.loadProfilePaciente();
  }

  loadProfilePaciente() {
    this.pacienteService.getPatientById().subscribe(
      (response: {patient: Patient}) => {
        console.log('PacienteProfile Response:', response);
        this.PacienteProfile = response.patient; // Asigna el paciente a PacienteProfile
      },
      error => {
        console.error('Error al cargar el perfil del paciente', error);
      }
    );
  }
  enableEditing() {
    this.isEditing = true;
  }

  saveProfile() {
    if (this.PacienteProfile.Password !== this.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    this.pacienteService.actualizarPatient(this.PacienteProfile).subscribe(response => {
      this.isEditing = false;
      alert("Perfil actualizado con éxito");
    }, error => {
      console.error('Error actualizando el perfil', error);
    });

  }
}

