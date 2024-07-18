
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ProfileService } from '../services/profile.service'; // Importa tu servicio de perfil aquí

@Component({
  selector: 'app-modal-perfil-paciente',
  templateUrl: './modal-perfil-paciente.component.html',
  styleUrl: './modal-perfil-paciente.component.css'
})
export class ModalPerfilPacienteComponent  {
  // profileForm: FormGroup;
  // isEditing: boolean = false;
  // profileData: any; // Aquí guardarás los datos del perfil obtenidos del servidor

  // constructor(private fb: FormBuilder, private profileService: ProfileService) {}

  // ngOnInit(): void {
  //   this.loadProfileData(); // Carga los datos del perfil al inicializar el componente

  //   this.profileForm = this.fb.group({
  //     email: [{ value: '', disabled: true }],
  //     nombre: ['', Validators.required],
  //     apellido: ['', Validators.required],
  //     tipoDocumento: ['', Validators.required],
  //     numeroDocumento: ['', Validators.required],
  //     telefono: ['', Validators.required],
  //     nuevaContrasena: ['', Validators.required],
  //     confirmarContrasena: ['', Validators.required]
  //   });
  // }

  // loadProfileData() {
  //   // Llama al servicio para obtener los datos del perfil del paciente
  //   this.profileService.getPatientProfile().subscribe(
  //     (data) => {
  //       this.profileData = data; // Guarda los datos del perfil
  //       this.profileForm.patchValue({
  //         email: this.profileData.email,
  //         nombre: this.profileData.firstName,
  //         apellido: this.profileData.lastName,
  //         tipoDocumento: this.profileData.documentType,
  //         numeroDocumento: this.profileData.documentNumber,
  //         telefono: this.profileData.phone
  //       });
  //     },
  //     (error) => {
  //       console.error('Error al cargar datos del perfil:', error);
  //     }
  //   );
  // }

  // enableEditing() {
  //   this.isEditing = true;
  //   this.profileForm.enable();
  // }

  // saveChanges() {
  //   if (this.profileForm.valid) {
  //     // Actualiza los datos del perfil en el servidor
  //     this.profileService.updatePatientProfile(this.profileForm.value).subscribe(
  //       (response) => {
  //         console.log('Datos actualizados correctamente:', response);
  //         this.isEditing = false; // Deshabilita la edición después de guardar
  //         this.profileForm.disable(); // Deshabilita el formulario después de guardar
  //         // Puedes mostrar un mensaje de éxito o realizar alguna otra acción necesaria
  //       },
  //       (error) => {
  //         console.error('Error al guardar cambios:', error);
  //         // Maneja el error de acuerdo a tus requerimientos
  //       }
  //     );
  //   }
  // }

  // changePassword() {
  //   // Implementa la lógica para cambiar la contraseña si es necesario
  // }
}
