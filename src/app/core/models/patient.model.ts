export interface Patient {
    id : string;
    tipoDocumento : string;
    nombre : string;
    apellido : string;
    email : string;
    password : string;
    direccion: string;
    telefono: string;
    img : string;
    rol: string;
    fechaNacimiento : Date;
    estado : string;
}