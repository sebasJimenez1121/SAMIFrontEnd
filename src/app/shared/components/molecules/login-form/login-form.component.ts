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
  selectedProfile: string = 'paciente';  // "Paciente" seleccionado por defecto

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

  // Validador para documento o correo electrónico
  documentOrEmailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const numericPattern = /^[0-9]*$/;

      if (emailPattern.test(value)) {
        return null;  
      } else if (numericPattern.test(value)) {
        return null;  
      } else {
        return { invalidDocumento: true };  
      }
    };
  }

  // Validador para contraseña fuerte
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

  // Seleccionar perfil
  selectProfile(profile: string) {
    this.selectedProfile = profile;
  }

  // Enviar formulario de inicio de sesión
  submitLoginForm() {
    if (this.loginForm.valid && !this.isSubmitting && this.selectedProfile) {
      this.isSubmitting = true;

      const credentials = {
        document: this.loginForm.value.documento && !this.loginForm.value.documento.includes('@') ? this.loginForm.value.documento : '',
        email: this.loginForm.value.documento.includes('@') ? this.loginForm.value.documento : '',
        password: this.loginForm.value.password,
        profile: this.selectedProfile
      };

      this.authService.login(credentials).subscribe({
        next: () => {
          this.authService.getUserRole().subscribe({
            next: (userRole) => {
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
              this.redirectBasedOnRole(userRole);
              this.isSubmitting = false;
            },
            error: (err) => {
              console.error('Error obteniendo el rol:', err);
              this.isSubmitting = false;
            }
          });
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

  private redirectBasedOnRole(userRole: string) {
    switch (userRole) {
      case 'admin':
        this.router.navigate(['/home-admin']);
        break;
      case 'medico':
        this.router.navigate(['/home-doctor']);
        break;
      case 'paciente':
        this.router.navigate(['/home-paciente']);
        break;
      default:
        console.error('Rol de usuario no reconocido:', userRole);
        break;
    }
  }
<<<<<<< Updated upstream
}
=======
}
>>>>>>> Stashed changes
