export interface Patient {
    Id: string;                
    Documento: string;       
    Tipo_Doc: string; 
    Nombre: string;           
    Apellido: string;        
    Email: string;           
    Telefono?: string;         
    Rol: string; 
    Direccion?: string;      
    Fecha_Nac: Date;          
    Estado?: string; 
    Password: string;        
    Foto_Url?: string;         
    Fecha_Reg: Date;         
}

export interface updatePatient {
    Id: string;
    Documento: string;  
    Nombre: string;      
    Apellido?: string;      
    Email?: string;         
    Telefono?: string;       
    Direccion?: string;      
    Estado?: string;  
}