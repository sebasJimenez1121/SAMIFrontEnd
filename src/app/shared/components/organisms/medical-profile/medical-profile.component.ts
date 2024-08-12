import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from '../../../../core/service/doctor.service';
import { Doctor } from '../../../../core/models/doctor.model';

@Component({
  selector: 'app-medical-profile',
  templateUrl: './medical-profile.component.html',
  styleUrls: ['./medical-profile.component.css']
})
export class MedicalProfileComponent {
  // profileForm: FormGroup;
  // isEditing: boolean = false;
  // profileData: Doctor;

  // constructor(private fb: FormBuilder, private doctorService: DoctorService) {
  //   this.profileForm = this.fb.group({
  //     email: [{ value: '', disabled: true }],
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     tarjetaProf: ['', Validators.required],
  //     documentNumber: ['', Validators.required],
  //     specialtyName: ['', Validators.required],
  //     appointmentCost: ['', Validators.required],
  //     newPassword: [''],
  //     confirmNewPassword: ['']
  //   });
  // }

  // ngOnInit(): void {
  //   this.loadProfileData();
  // }

  // loadProfileData() {
  //   const token = 'tu-token-de-autenticacion'; // Asegúrate de tener el token disponible
  //   this.doctorService.getDoctorByEmail(token).subscribe(
  //     (data) => {
  //       this.profileData = data;
  //       this.profileForm.patchValue({
  //         email: this.profileData.email,
  //         firstName: this.profileData.firstName,
  //         lastName: this.profileData.lastName,
  //         tarjetaProf: this.profileData.tarjetaProf,
  //         documentNumber: this.profileData.documentNumber,
  //         specialtyName: this.profileData.specialtyName,
  //         appointmentCost: this.profileData.appointmentCost
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
  //     const token = 'tu-token-de-autenticacion'; // Asegúrate de tener el token disponible
  //     const updatedDoctor: Doctor = {
  //       ...this.profileData,
  //       ...this.profileForm.value
  //     };

  //     this.doctorService.updateDoctor(token, updatedDoctor).subscribe(
  //       (response) => {
  //         console.log('Datos actualizados correctamente:', response);
  //         this.isEditing = false;
  //         this.profileForm.disable();
  //         // Puedes mostrar un mensaje de éxito o realizar alguna otra acción necesaria
  //       },
  //       (error) => {
  //         console.error('Error al guardar cambios:', error);
  //       }
  //     );
  //   }
  // }

  // changePassword() {
  //   const token = 'tu-token-de-autenticacion'; // Asegúrate de tener el token disponible
  //   const passwords = {
  //     oldPassword: '', // Obtener la contraseña actual del formulario si es necesario
  //     newPassword: this.profileForm.get('newPassword').value
  //   };

  //   this.doctorService.changePassword(token, passwords).subscribe(
  //     (response) => {
  //       console.log('Contraseña cambiada correctamente:', response);
  //       // Puedes mostrar un mensaje de éxito o realizar alguna otra acción necesaria
  //     },
  //     (error) => {
  //       console.error('Error al cambiar la contraseña:', error);
  //     }
  //   );
  // }
}
