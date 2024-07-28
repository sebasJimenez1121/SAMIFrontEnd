export interface Doctor {
    id: number;
    tarjetaProf: string;
    documento: string;
    nombre: string;
    apellido:string;
    rol: string;
    email:string;
    img:string;
    password: string;
    codigoEspc:string;
    specialtyId: number;
    appointmentCost: number;
    specialtyName: string;
    rating: number;
  }

 export interface Specialty {
  Codigo_Espc: string;
  Nombre: string;
  Descripcion: string;
}


