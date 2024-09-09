import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { DoctorService } from '../../../../core/service/doctor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SpecialtyService } from '../../../../core/service/Specialty.service';
import { Specialty, DoctorPublic } from '../../../../core/models/doctor.model';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  isSubmitting: boolean = false;
  imgFile: File | null = null;
  specialties: Array<{ value: string, label: string }> = [];

  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorService,
    private router: Router,
    private specialtyService: SpecialtyService
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
      valorCita: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], 
      img: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, { validators: this.passwordsMatchValidator });
  }

  ngOnInit(): void {
    this.loadSpecialties();
  }

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
  
    const formData = new FormData();
    formData.append('tarjetaProf', this.registrationForm.get('tarjetaProf')?.value);
    formData.append('documento', this.registrationForm.get('documento')?.value);
    formData.append('nombre', this.registrationForm.get('nombre')?.value);
    formData.append('apellido', this.registrationForm.get('apellido')?.value);
    formData.append('rol', 'medico');
    formData.append('email', this.registrationForm.get('email')?.value);
    formData.append('password', this.registrationForm.get('password')?.value);
    formData.append('valorCita', this.registrationForm.get('valorCita')?.value);
    formData.append('codigoEspc', this.registrationForm.get('specialtyId')?.value);
  
    if (this.imgFile) {
      formData.append('fotoUrl', this.imgFile);
    }
  
    this.doctorService.crearDoctor(formData).subscribe({
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
          this.registrationForm.reset();
          this.imgFile = null;
          this.registrationForm.markAsPristine();
          this.registrationForm.markAsUntouched();
          this.loadDoctors();
        });
      },
      error: error => {
        this.isSubmitting = false;
        Swal.fire('Error', 'Ocurrió un error durante el registro', 'error');
        console.error('Error during registration', error);
      }
    });
  }

  loadDoctors(): void {
    this.doctorService.getDoctors().subscribe(
      (data: DoctorPublic[]) => { // Asegúrate de que este tipo sea el correcto
        console.log('Doctors data:', data);
        // Actualiza la lista de médicos en el componente si es necesario
      },
      error => {
        console.error('Error al cargar la lista de médicos', error);
      }
    );
  }

  loadSpecialties(): void {
    this.specialtyService.getSpecialties().subscribe(
      (specialties: Specialty[]) => {
        this.specialties = specialties.map(specialty => ({
          value: specialty.Codigo_Espc,
          label: specialty.Nombre
        }));
      },
      error => {
        console.error('Error al cargar especialidades', error);
      }
    );
  }
}
