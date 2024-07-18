export interface Doctor {
    id: number;
    tarjetaProf: string;
    documento: string;
    nombre: string;
    apellido:string;
    rol: string;
    email:string;
    foto:string;
    password: string;
    codigoEspc:string;
    specialtyId: number;
    appointmentCost: number
    specialtyName: string;
    rating: number;
  }

  export interface Specialty {
    //id: number;
    codigoEspc:number;
    nombre : string;
    descripcion:string;
  }