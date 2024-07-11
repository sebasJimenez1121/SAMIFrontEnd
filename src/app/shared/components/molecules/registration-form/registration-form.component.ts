import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../../../../core/service/auth-service.service';
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
    { value: 'cc', label: 'Cédula de ciudadanía' },
    { value: 'ti', label: 'Tarjeta de identidad' },
    { value: 'ce', label: 'Cédula de extranjería' },
    { value: 'rc', label: 'Registro civil' }
  ];
  isSubmitting = false;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      documentNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      documentType: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/)
      ]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: AbstractControl) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      form.get('confirmPassword')?.setErrors(null);
    }
    return null;
  }
  submitRegistrationForm() {
    if (this.registrationForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
  
      const userType = 'patient'; // O 'doctor' o 'admin', según corresponda
      const userData = this.registrationForm.value;
  
      this.authService.registerUser(userType, userData).subscribe({
        next: (response) => {
          Swal.fire({
            title: 'Registro Exitoso',
            text: `¡Te has registrado exitosamente como ${userType}!`,
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            toast: true,
            position: 'top',
            background: "#C6F0C2",
            iconColor: "#1C5314",
          });
          this.isSubmitting = false;
        },
        error: (err: any) => {
          console.error('Error al registrar usuario:', err);
          Swal.fire({
            title: 'Error al registrarse',
            text: 'No se pudo registrar. Por favor, inténtelo nuevamente más tarde.',
            icon: 'error',
            showConfirmButton: true
          });
          this.isSubmitting = false;
        }
      });
    }
  }}