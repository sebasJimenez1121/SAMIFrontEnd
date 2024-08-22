import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/service/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {
  recoverpasswordForm!: FormGroup;
  isSubmitting = false;
  recoverpasswordError: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recoverpasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, this.emailValidator()]],
    });
  }

  
  emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailPattern.test(value)) {
        return null; 
      } else {
        return { invalidEmail: true }; 
      }
    };
  }
  submitRecoverPasswordForm() {
    if (this.recoverpasswordForm.invalid) {
      Swal.fire({
        title: 'Error',
        text: 'El correo electrónico no es válido.',
        icon: 'error',
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        toast: true,
        position: 'top',
        background: '#F5C0B8',
        iconColor: '#D02B20'
      });
      return; 
    }

    if (!this.isSubmitting) {
      this.isSubmitting = true;

      const credentials = {
        email: this.recoverpasswordForm.value.email
      };

      this.authService.recoverPassword(credentials.email).subscribe(
        {
          next: (response) => {
            Swal.fire({
              title: 'Éxito',
              text: 'Se ha enviado un correo para recuperar tu contraseña.',
              icon: 'success',
              background: "#C6F0C2",
              iconColor: "#1C5314",
              timer: 2000,
              timerProgressBar: true,
              toast: true,
              position: 'top',
              showConfirmButton: true,
              confirmButtonText: 'Cerrar',
              customClass: {
                confirmButton: 'swal2-confirm-success'
              }
            }).then(() => {
              this.isSubmitting = false;
              this.router.navigate(['/confirmation']);
            });
          },
          error: (err) => {
            this.isSubmitting = false;
            Swal.fire({
              title: 'Error',
              text: 'Correo no existente o no registrado..',
              icon: 'error',
              showConfirmButton: false,
              timer: 4000,
              timerProgressBar: true,
              toast: true,
              position: 'top',
              background: '#F5C0B8',
              iconColor: '#D02B20'
            });
          }
        }
      );
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
