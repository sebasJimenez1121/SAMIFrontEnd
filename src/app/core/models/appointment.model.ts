export interface Appointment { 
    id: number;
    IdMedico: number;
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
    meta?: {
        description?: string;
        // otras propiedades si existen
    };
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
}

export interface medicamentos{
    NombreMedicamento:string;
    horaAtomar:number;
    fechaInicio:Date;
    fechaFin:Date;
}