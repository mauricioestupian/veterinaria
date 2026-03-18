export interface RegisterData {
  nombre: string;
  apellido: string;
  documento: {
    tipo: string;
    numero: string;
  };
  direccion: {
    calle: string;
    ciudad: string;
    pais: string;
    codigoPostal: string;
  };
  email: string;
  usuario: string;
  password: string;
  roles: string[];
}