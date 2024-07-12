import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/service/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitting = false;
  loginError: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      documento: ['', [Validators.required, this.documentOrEmailValidator()]],
      password: ['', [Validators.required, this.strongPasswordValidator()]],
      remember: [false]
    });
  }

  documentOrEmailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const numericPattern = /^[0-9]*$/;

      if (emailPattern.test(value)) {
        return null;  // Es un correo válido
      } else if (numericPattern.test(value)) {
        return null;  // Es un número válido
      } else {
        return { invalidDocumento: true };  // No es ni un correo ni un número válido
      }
    };
  }

  strongPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }

      const hasUpperCase = /[A-Z]/.test(value);
      const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const hasMinLength = value.length >= 8;

      const passwordValid = hasUpperCase && hasSpecialCharacter && hasMinLength;
      return !passwordValid ? { strongPassword: true } : null;
    };
  }

  submitLoginForm() {
    if (this.loginForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;

      const credentials = {
        document: this.loginForm.value.documento && !this.loginForm.value.documento.includes('@') ? this.loginForm.value.documento : '',
        email: this.loginForm.value.documento.includes('@') ? this.loginForm.value.documento : '',
        password: this.loginForm.value.password
      };

      this.authService.login(credentials).subscribe({
        next: () => {
          Swal.fire({
            title: 'Inicio de sesión exitoso',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            toast: true,
            position: 'top',
            background: "#C6F0C2",
            iconColor: "#1C5314",
          });
          this.redirectBasedOnRole();
          this.isSubmitting = false;
        },
        error: (err: any) => {
          console.error('Error al iniciar sesión:', err);
          this.loginError = 'Credenciales inválidas. Por favor, verifica tu documento y contraseña.';
          this.isSubmitting = false;
        }
      });
    } else {
      this.markFormGroupTouched(this.loginForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  private redirectBasedOnRole() {
    this.authService.getUserRole().subscribe({
      next: (userRole) => {
        switch (userRole) {
          case 'admin':
            this.router.navigate(['/admin-dashboard']);
            break;
          case 'doctor':
            this.router.navigate(['/doctor-dashboard']);
            break;
          case 'patient':
            this.router.navigate(['/patient-dashboard']);
            break;
          default:
            console.error('Rol de usuario no reconocido:', userRole);
            break;
        }
      },
      error: (err) => {
        console.error('Error obteniendo el rol:', err);
      }
    });
  }
}
