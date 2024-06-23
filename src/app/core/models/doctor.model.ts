export interface Doctor {
    id: number;
    name: string;
    apellido: string;
    specialtyId: number;
    specialtyName: string;
    rating: number;
    rol : string;
    img: string;
    appointmentCost: number;
  }
  export interface Specialty {
    id: number;
    name: string;
   
  }