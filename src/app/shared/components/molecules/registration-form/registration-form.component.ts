import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { PacienteService } from '../../../../core/service/paciente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  @Input() id: string = '';
  registrationForm!: FormGroup;
 
  documentTypeOptions = [
    { value: 'Cedula Ciudadania', label: 'Cedula Cidadania' },
    { value: 'Tarjeta Identidad', label: 'Tarjeta identidad' },
    { value: 'Cedula de Extranjeria', label: 'Cédula de extranjería' },
    { value: 'Registro Civil', label: 'Registro civil' }
  ];
  isSubmitting = false;

  constructor(private fb: FormBuilder, private pacienteService: PacienteService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      documentNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      documentType: ['', Validators.required],
      birthDate: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/)
      ]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, { validators: this.passwordsMatchValidator });
  }

  passwordsMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'mismatch': true };
    }
    return null;
  }submitRegistrationForm() {
    if (this.registrationForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
  

    
      const userData = {
        documentoPac: this.registrationForm.value.documentNumber,
        tipoDoc: this.registrationForm.value.documentType,
        nombre: this.registrationForm.value.firstName,
        apellido: this.registrationForm.value.lastName,
        email: this.registrationForm.value.email,
        password: this.registrationForm.value.password,
        fechaNac: this.registrationForm.value.birthDate,
        rol: 'paciente'
      };
      console.log('Datos a enviar:', userData);
  
      this.pacienteService.registrarPatient(userData).subscribe({
        next: (response) => {
          Swal.fire({
            title: 'Registro Exitoso',
            text: '¡Te has registrado exitosamente!',
            icon: 'success',
            confirmButtonText: 'Cerrar',
            background: "#C6F0C2",
            iconColor: "#1C5314",
            timer: 2000,
            timerProgressBar: true,
            toast: true,
            position: 'top',
            showConfirmButton: true,
            customClass: {
              confirmButton: 'swal2-confirm-success'
            }
          }).then(() => {
            this.isSubmitting = false;
          });
        },
        error: (err: any) => {
          console.error('Error al registrar usuario:', err);
          Swal.fire({
            title: 'Error al registrarse',
            text: 'No se pudo registrar. Por favor, inténtelo nuevamente más tarde.',
            icon: 'error',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            toast: true,
            position: 'top',
            background: '#F5C0B8',
            iconColor: '#D02B20'
          }).then(() => {
            this.isSubmitting = false;
          });
        }
      });
    }
  }
}
