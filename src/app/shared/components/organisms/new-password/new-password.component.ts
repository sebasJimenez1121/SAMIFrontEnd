import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/service/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {
  recoverpasswordForm!: FormGroup;
  isSubmitting = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recoverpasswordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, this.passwordValidator()]],
      confirmPassword: ['', [Validators.required]],
    }, { validator: this.passwordMatchValidator });
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      return passwordPattern.test(value) ? null : { invalidPassword: true };
    };
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return newPassword === confirmPassword ? null : { mustMatch: true };
  }

  submitRecoverPasswordForm() {
    if (this.recoverpasswordForm.invalid) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, verifique que las contraseñas sean válidas y coincidan.',
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

      const { newPassword } = this.recoverpasswordForm.value;

      this.authService.updatePassword(newPassword).subscribe(
        response => {
          Swal.fire({
            title: 'Éxito',
            text: 'Su contraseña ha sido actualizada exitosamente.',
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
            this.router.navigate(['/login']);
          });
        },
        error => {
          this.isSubmitting = false;
          Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al actualizar la contraseña. Inténtelo de nuevo.',
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
      );
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
