
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
   id: 0,
    documentoPac: '',
    tipoDoc:'',
    nombre: '',
    apellido: '',
    email:'',
    password:'',
    fechaNac:'',
    rol:'',
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
    const token = localStorage.getItem('token');
    if (token) {
      this.pacienteService.getPatientByEmail(token).subscribe((response: Patient) => {
        this.PacienteProfile = response;
        console.log(this.PacienteProfile);
      }, error => {
        console.error('Error al cargar el perfil del paciente', error);
      });
    }
  }

  enableEditing() {
    this.isEditing = true;
  }

  saveProfile() {
    if (this.PacienteProfile.password !== this.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const token = localStorage.getItem('token');
    if (token) {
      this.pacienteService.actualizarPatient(token, this.PacienteProfile).subscribe(response => {
        this.isEditing = false;
        alert("Perfil actualizado con éxito");
      }, error => {
        console.error('Error actualizando el perfil', error);
      });
    }
  }
}

