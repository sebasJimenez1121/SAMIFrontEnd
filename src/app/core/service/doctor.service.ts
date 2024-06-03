import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Doctor {  
  id: number;
  name: string;
  specialtyId: number;
  specialtyName: string; 
  rating: number;
  img: string;
  appointmentCost: number;
}

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private specialties = [
    { id: 1, name: 'Cardiología' },
    { id: 2, name: 'Neurología' },
    { id: 3, name: 'Dermatología' }
  ];

  private doctors: Doctor[] = [
    { id: 1, name: 'Dr. Juan Perez', specialtyId: 1,specialtyName: 'Cardiología', rating: 4.5, img: '../../../../../assets/images/Link → doctor_5.png.png',appointmentCost: 40.000 },
    { id: 2, name: 'Dr. Maria Gomez', specialtyId: 2,specialtyName: 'Neurologia',rating: 4.8, img: '../../../../../assets/images/Link → doctor_1.png.png',appointmentCost: 50.000},
    { id: 3, name: 'Dr. Carlos Rodriguez', specialtyId: 3,specialtyName: 'Dermatologia', rating: 4.2, img: '../../../../../assets/images/Link → doctor_9.png.png',appointmentCost: 70.000 },
    { id: 4, name: 'Dr. Ana Martinez', specialtyId: 1,specialtyName: 'Cardiología', rating: 4.9, img: '../../../../../assets/images/Link → doctor_3.png.png',appointmentCost: 80.000 },
    { id: 5, name: 'Dr. Laura Sanchez', specialtyId: 2, specialtyName: 'Neurologia',rating: 4.7, img: '../../../../../assets/images/Link → doctor_4.png.png',appointmentCost: 80.000 },
    { id: 6, name: 'Dr. Pablo Gonzalez', specialtyId: 3,specialtyName: 'Dermatologia', rating: 4.6, img: '../../../../../assets/images/Link → doctor_7.png.png' ,appointmentCost: 90.000},
    { id: 7, name: 'Dr. Marcos Silva', specialtyId: 2, specialtyName: 'Neurologia',rating: 4.3, img: '../../../../../assets/images/Link → doctor_11.png.png',appointmentCost: 30.000},
    { id: 8, name: 'Dr. Sara rojas', specialtyId: 3,specialtyName: 'Dermatologia', rating: 4.1, img: '../../../../../assets/images/Link → doctor_8.png.png' ,appointmentCost: 40.000},
    { id: 9, name: 'Dr. Pedro Fernandez', specialtyId: 1, specialtyName: 'Cardiología',rating: 4.0, img: '../../../../../assets/images/Link → doctor_2.png.png' ,appointmentCost: 60.000},
   
    
  ];

  getSpecialties(): Observable<any> {
    return of(this.specialties);
  }

  getDoctors(page: number, specialtyId?: number, sortField?: keyof Doctor, sortOrder: string = 'asc'): Observable<any> {
    let filteredDoctors = this.doctors;

    if (specialtyId) {
      filteredDoctors = filteredDoctors.filter(doctor => doctor.specialtyId === specialtyId);
    }

    if (sortField) {
      filteredDoctors = filteredDoctors.sort((a, b) => {
        const fieldA = a[sortField];
        const fieldB = b[sortField];

        if (sortOrder === 'asc') {
          return fieldA < fieldB ? -1 : fieldA > fieldB ? 1 : 0;
        } else {
          return fieldA > fieldB ? -1 : fieldA < fieldB ? 1 : 0;
        }
      });
    }

    const startIndex = (page - 1) * 10;
    const endIndex = page * 10;

    return of({
      total: filteredDoctors.length,
      doctors: filteredDoctors.slice(startIndex, endIndex)
    });
  }
}
