export interface Doctor {
    id: number;
    tarjetaProf: string;
    documento: string;
    nombre: string;
    apellido:string;
    rol: string;
    email:string;
    estado: string; 
    img:string;
    password: string;
    codigoEspc:string;
    specialtyId: number;
    appointmentCost: number;
    specialtyName: string;
    rating: number;
  }

  
  export interface DoctorPublic {
    id: string;
    tarjetaProf: string;
    nombre: string;
    estado: string;
    apellido:string;
    imgUrl:string;
    codigoEspc:string;
    valorCita: number;
    especialidad: string;
  }

 export interface Specialty {
  Codigo_Espc: string;
  Nombre: string;
  Descripcion: string;
}


