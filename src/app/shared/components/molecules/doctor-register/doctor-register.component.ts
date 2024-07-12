import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AuthService } from '../../../../core/service/auth-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent /* implements OnInit */ {
  /* registrationForm: FormGroup;
  isSubmitting: boolean = false;
  imgFile: File | null = null;

  specialtyOptions = [
    { value: '1', label: 'Cardiología' },
    { value: '2', label: 'Dermatología' },
    { value: '3', label: 'Pediatría' },
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      documentNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      specialtyId: ['', Validators.required],
      img: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*]).*$')]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    }, {
      validators: this.passwordMatchValidator
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.registrationForm.invalid) {
      return;
    }
    this.isSubmitting = true;
    const formData = this.registrationForm.value;
    delete formData.confirmPassword;

    this.authService.registerDoctor(formData, this.imgFile!).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        Swal.fire('Registro Exitoso', 'El doctor ha sido registrado correctamente.', 'success');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.isSubmitting = false;
        Swal.fire('Error', 'Ha ocurrido un error al registrar el doctor.', 'error');
      }
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.imgFile = input.files[0];
    }
  }

  viewImage() {
    if (this.imgFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.imgFile);
      reader.onload = () => {
        Swal.fire({
          imageUrl: reader.result as string,
          imageAlt: 'Imagen del doctor',
          showCloseButton: true,
          showCancelButton: false,
          showConfirmButton: false,
        });
      };
    }
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }; */
}
