// src/app/core/models/doctor.model.ts

export interface Doctor {
    id: number;
    name: string;
    specialtyId: number;
    specialtyName: string;
    rating: number;
    img: string;
    appointmentCost: number;
  }
  