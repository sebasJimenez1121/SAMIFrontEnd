export interface Appointment { 
    id: number;
    IdMedico: string;
    IdCiente: number;
    nameMedico: string;
    namePaciente: string;
    patientDocument:number;
    patientPhone: number; 
    especialidad: string;
    imagenMedico: string;
    estado: string;
    estadoPago: string;
    valorCita: string;
    motivoCita: string;
    fechaCita: string;
    horaCita:string;
}


export interface AppointmentUpdate {
    fechaCita?: string;
    horaCita?:string;
    estado?: string;
    estadoPago?: string;
    motivoCita?: string;
}

export interface AppointmentCreate {
    id?: number;
    idMedico: string;
    idCliente: number;
    metodoPago: string;
    idPago: number;
    fechaHora: string; // Formato: YYYY-MM-DD HH:mm:ss
    motivo: string;
  }