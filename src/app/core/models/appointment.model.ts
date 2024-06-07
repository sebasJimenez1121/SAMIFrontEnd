export interface Appointment { 
    IdMedico: string;
    IdCiente: number;
    nameMedico: String;
    namePaciente: String;
    estado: string;
    estadoPago: string;
    valorCita: string;
    motivoCita: string;
    fechaCita: string;
}

export interface AppointmentUpdate {
    fechaCita?: string;
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