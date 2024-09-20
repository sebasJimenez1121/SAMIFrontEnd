export interface Appointment {
    codigoCita: number;
    motivoCita: string | null;
    estadoCita: string;
    horaCita: string;
    fechaCita: string;
    fkIdAdmin: string;
    idDoctor: string;
    nombreDoctor: string;
    apellidoDoctor: string;
    emailDoctor: string;
    tarjetaProfDoctor: string;
    imagenMedico: string;
    valorCita: string;
    idPaciente: string;
    nombrePaciente: string;
    apellidoPaciente: string;
    emailPaciente: string;
    documentoPaciente: string;
    codigoEspecialidad: string;
    nombreEspecialidad: string;
  }

export interface AppointmentUpdate {
    fechaCita?: string;
    horaCita?:string;
    estado?: string;
    estadoPago?: string;
    motivoCita?: string;
}

export interface AppointmentCreate {
    horaCita: string;
    fechaCita: string;
    fKIdDoct: string;
    fKIdPac: string;
    motivoCita: string;
    EmailPac: string;
}

export interface medicamentos{
    NombreMedicamento:string;
    horaAtomar:number;
    fechaInicio:Date;
    fechaFin:Date;
    
}