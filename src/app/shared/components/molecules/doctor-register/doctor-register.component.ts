import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { DoctorService } from '../../../../core/service/doctor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  isSubmitting: boolean = false;
  imgFile: File | null = null;

  documentTypeOptions = [
    { value: 'Odontologia', label: 'Odontologia' },
    { value: 'Dermatologia', label: 'Dermatologia' },
    { value: 'Oftalmologia', label: 'Oftalmologia' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorService,
    private router: Router
  ) {
    this.registrationForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*]).*$')
      ]],
      confirmPassword: ['', Validators.required],
      documento: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      tarjetaProf: ['', Validators.required],
      specialtyId: ['', Validators.required],
      codigoEspc: ['', Validators.required],
      img: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, { validators: this.passwordsMatchValidator });
  }

  ngOnInit(): void { }

  passwordsMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'mismatch': true };
    }
    return null;
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.imgFile = file;
      this.registrationForm.patchValue({ img: file.name });
    }
  }

  viewImage(): void {
    if (this.imgFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        Swal.fire({
          title: 'Imagen de perfil',
          imageUrl: e.target.result,
          imageAlt: 'Imagen de perfil'
        });
      };
      reader.readAsDataURL(this.imgFile);
    }
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    const credentials = {
      tarjetaProf: this.registrationForm.get('tarjetaProf')?.value,
      documento: this.registrationForm.get('documento')?.value,
      nombre: this.registrationForm.get('nombre')?.value,
      apellido: this.registrationForm.get('apellido')?.value,
      rol: 'medico',
      email: this.registrationForm.get('email')?.value,
      foto: this.imgFile ? this.imgFile.name : '',
      password: this.registrationForm.get('password')?.value,
      valorCita: 50000,
      codigoEspc: this.registrationForm.get('codigoEspc')?.value
    };

    this.doctorService.crearDoctor(credentials).subscribe({
      next: response => {
        this.isSubmitting = false;
        Swal.fire({
          title: 'Registro exitoso',
          text: 'El doctor ha sido registrado exitosamente',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          toast: true,
          position: 'top',
          background: "#C6F0C2",
          iconColor: "#1C5314",
        }).then(() => {
          this.router.navigate(['/home']);
        });
      },
      error: error => {
        this.isSubmitting = false;
        Swal.fire('Error', 'Ocurrió un error durante el registro', 'error');
        console.error('Error during registration', error);
      }
    });
  }
}
