import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { DoctorService } from '../../../../core/service/doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  specialties: any[] = []; // Assuming you have a way to fetch and populate this array
  isSubmitting = false;
  selectedFile: File | undefined; // Assuming you handle file upload separately if needed

  constructor(private fb: FormBuilder, private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      tarjetaProf: ['', Validators.required],
      documento: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      rol: ['doctor'],
      email: ['', [Validators.required, Validators.email]],
      foto: [''], // You can handle file upload separately if needed
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/)
      ]],
      codigoEspc: ['', Validators.required] // Assuming this is a string for specialty code
    });
  }

  submitRegistrationForm() {
    if (this.registrationForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;

      const userData = {
        tarjetaProf: this.registrationForm.value.tarjetaProf,
        documento: this.registrationForm.value.documento,
        nombre: this.registrationForm.value.nombre,
        apellido: this.registrationForm.value.apellido,
        rol: 'doctor', // Ensure 'doctor' is sent correctly here
        email: this.registrationForm.value.email,
        foto: this.selectedFile,
        password: this.registrationForm.value.password,
        codigoEspc: this.registrationForm.value.codigoEspc
      };

      console.log('Datos a enviar:', userData);

      this.doctorService.crearDoctor(userData).subscribe({
        next: (response) => {
          Swal.fire({
            title: 'Registro Exitoso',
            text: `¡Doctor registrado exitosamente!`,
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
          console.error('Error al registrar doctor:', err);
          Swal.fire({
            title: 'Error al registrar',
            text: 'No se pudo registrar al doctor. Por favor, inténtelo nuevamente más tarde.',
            icon: 'error',
            showConfirmButton: true
          });
          this.isSubmitting = false;
        }
      });
    } else {
      this.markFormGroupTouched(this.registrationForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control?.markAsTouched();
      }
    });
  }
}
